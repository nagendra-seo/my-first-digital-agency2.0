/**
 * Vercel serverless entry point. This is what the root vercel.json points
 * the /api/* routes at — NOT server.js (which calls app.listen() for
 * local/traditional hosting and would be wrong here: a serverless function
 * is invoked fresh per request/cold-start, it never "listens").
 *
 * Express apps are directly compatible with Node's (req, res) handler
 * signature as long as you don't call .listen() on them, which is exactly
 * what makes this work — app itself IS the handler.
 */
import app from "../src/app.js";
import { connectDB } from "../src/config/db.js";

export default async function handler(req, res) {
  await connectDB(); // no-op on an already-warm instance — see db.js
  return app(req, res);
}
