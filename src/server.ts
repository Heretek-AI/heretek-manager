import express from "express";
import type { Server as HttpServer } from "http";
import http from "http";
import { statusRouter } from "./api/status.js";
import { createProvidersRouter } from "./api/providers.js";
import { createModelsRouter } from "./api/models.js";
import type { AIProvider } from "./providers/types.js";

export function createServer(
  providers?: Map<string, AIProvider>
): HttpServer {
  const app = express();
  app.use(express.json());

  const registry = providers || new Map();

  app.use("/api/status", statusRouter);
  app.use("/api/providers", createProvidersRouter(registry));
  app.use("/api/models", createModelsRouter(registry));

  const srv = http.createServer(app);
  return srv;
}
