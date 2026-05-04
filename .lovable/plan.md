## Goal
Make the `artifacts/api-server` deployment work reliably on Vercel by eliminating the current TypeScript emit failure and reducing future monorepo-related deployment breakage.

## What I found
The failure is not coming from your `esbuild` bundle itself. That build succeeds.

The real problem is Vercel's Express/Node detection step trying to compile a TypeScript source file directly:
- `artifacts/api-server/src/routes/health.ts`
- it imports `@workspace/api-zod`
- that package currently exports raw source (`./src/index.ts`)
- Vercel then tries to typecheck/emit those TS files in a serverless builder context
- that builder throws `Emit skipped`

There are also broader monorepo risks in the current setup:
- internal workspace packages export `src/*.ts` instead of built outputs
- `artifacts/api-server` depends on `@workspace/db` even though the API code does not currently use it
- `artifacts/api-server/src/index.ts` uses `app.listen(...)`, while Vercel also supports a safer default-export Express pattern
- there is no dedicated Vercel config for the API artifact, unlike the frontend artifact

## Implementation plan

### 1. Make internal workspace packages deploy-safe
Update workspace libraries so deployable apps do not rely on raw TypeScript source during Vercel runtime packaging.

Planned changes:
- `lib/api-zod/package.json`
  - change exports from `./src/index.ts` to built output in `dist`
  - add build script for declaration emit
- `lib/api-client-react/package.json`
  - same export cleanup to `dist`
  - add build script
- `lib/db/package.json`
  - either point exports to `dist` or keep it out of the API deployment path if unused
  - add explicit build script if needed

Why:
- Vercel is much more stable when deployed apps consume built package outputs instead of workspace TS sources.
- This avoids repeat `Emit skipped`, missing type resolution, and builder-specific TS behavior.

### 2. Remove unused monorepo dependencies from the API artifact
Clean up `artifacts/api-server/package.json` so only actually used packages remain in the deploy target.

Planned changes:
- remove `@workspace/db` if still unused
- keep `@workspace/api-zod` only if the route continues to use it

Why:
- fewer transitive workspace dependencies means fewer opportunities for Vercel to crawl unrelated packages and fail on them.
- this also avoids future errors like missing `pg`, `drizzle-orm/node-postgres`, or Node types during packaging.

### 3. Make the API entrypoint Vercel-friendly
Refactor the Express app so Vercel can consume it in the most compatible way.

Planned changes:
- keep `src/app.ts` as the Express app definition
- change `src/index.ts` to export the app by default for Vercel compatibility
- optionally keep local listen behavior in a dev-only entry or guard it behind environment checks if needed

Preferred shape:
```ts
import app from './app';
export default app;
```

Why:
- this matches Vercel’s documented Express deployment pattern.
- it reduces the chance that Vercel tries to reinterpret your package as a traditional Node server instead of a function-style Express app.

### 4. Add dedicated Vercel config for the API artifact
Create `artifacts/api-server/vercel.json` so the deployment behavior is explicit instead of inferred.

Planned config:
- set framework to Express/Other-compatible flow
- set root-local build command for the API artifact
- avoid frontend-style `outputDirectory` because this is not a static app
- if needed, define function behavior explicitly

Why:
- explicit Vercel config prevents the platform from making the wrong assumptions in a monorepo.
- it also makes future deployments reproducible.

### 5. Align TypeScript configs with deployment behavior
Adjust TypeScript/package boundaries so builder tools do not get stuck between source TS, composite references, and no-emit behavior.

Planned changes:
- keep project references for workspace typechecking where useful
- ensure packages consumed by deployable apps have real build outputs
- remove misleading comments like the `composite: false // ADD THIS` note in `artifacts/api-server/tsconfig.json`
- confirm `rootDir`, `outDir`, and emit behavior are consistent for each package

Why:
- right now the repo mixes “source-exported packages” with “declaration-only referenced packages”, which is fragile in CI/CD and Vercel builders.
- this step makes the setup predictable.

### 6. Verify deployment path end-to-end
After edits, validate the exact deployment shape locally in the repo:
- workspace packages build cleanly
- API artifact resolves internal packages from built outputs
- Vercel-target config points at the correct artifact root
- health route remains functional

## Expected result
After these changes:
- Vercel should stop failing with `src/routes/health.ts: Emit skipped`
- the API artifact will be self-contained and much less sensitive to workspace TypeScript quirks
- future deploys will be more reliable because internal packages won’t expose raw TS to the Vercel builder

## Technical details

### Likely root cause chain
```text
Vercel detects Express app
  -> inspects TypeScript entry/source files
  -> reaches src/routes/health.ts
  -> follows import to @workspace/api-zod
  -> package export points to src/index.ts
  -> Vercel builder attempts TS emit/typecheck in monorepo context
  -> emit is skipped by TypeScript/Vercel builder rules
  -> deployment fails
```

### Why this is the durable fix
A quick patch would be to stop importing `@workspace/api-zod` in the route and inline the schema. That might unblock this one file, but it would not solve the underlying deploy fragility.

The durable fix is:
- deployable artifact consumes built workspace outputs
- unused workspace packages are removed from deploy path
- Vercel entrypoint is explicit and compatible
- artifact-level Vercel config is added

## Files I expect to update after approval
- `artifacts/api-server/package.json`
- `artifacts/api-server/src/index.ts`
- `artifacts/api-server/tsconfig.json`
- `artifacts/api-server/vercel.json` (new)
- `lib/api-zod/package.json`
- `lib/api-client-react/package.json`
- possibly `lib/db/package.json`
- possibly library tsconfig/build output files if exports must point to `dist`

## Optional fallback if you want the fastest unblock
If you want the smallest possible fix instead of the strongest one, I can use this narrower approach:
- remove workspace imports from `artifacts/api-server`
- inline the health response schema/type
- remove unused `@workspace/db`
- add API-specific `vercel.json`

That is faster, but less future-proof than fixing the workspace package boundaries properly.