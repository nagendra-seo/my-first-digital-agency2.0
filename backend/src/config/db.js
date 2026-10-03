import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "../utils/logger.js";

/**
 * Safe to call on every request, not just once at startup. That matters in
 * two different runtimes this project supports:
 *  - Local/traditional server (server.js): called once before app.listen().
 *  - Vercel serverless function (api/index.js): called on every invocation,
 *    where a warm instance already has an open connection (readyState 1)
 *    and this becomes a cheap no-op, avoiding a fresh connection — and a
 *    wasted Atlas connection-pool slot — on every single request.
 */
export async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  mongoose.set("strictQuery", true);
  await mongoose.connect(env.MONGODB_URI);
  logger.info(`MongoDB connected: ${mongoose.connection.host}`);
}
