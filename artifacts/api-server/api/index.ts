// Vercel serverless function entrypoint.
// Vercel auto-detects files in /api and deploys each as a function.
// We re-export the Express app so Vercel invokes it for every request.
import app from "../src/app";

export default app;
