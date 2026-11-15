import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";

// Lee tu .env (expande ${POSTGRES_USER} etc. como Compose)
const env = loadEnv("test", process.cwd(), "");

export default defineConfig({
  test: {
    env: {
      JWT_SECRET: "secreto-solo-para-tests", // nunca el real
      DATABASE_URL: (env.DATABASE_URL ?? "").replace("@db:", "@localhost:"),
    },
  },
});