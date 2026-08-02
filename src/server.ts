import express from "express";
import type { Server as HttpServer } from "http";
import http from "http";

export function createServer(): HttpServer {
  const app = express();
  app.use(express.json());

  app.get("/api/status", (_req, res) => {
    res.json({ status: "ok", version: "0.1.0" });
  });

  const srv = http.createServer(app);
  return srv;
}
