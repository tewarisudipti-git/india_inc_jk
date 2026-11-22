import { execSync } from "node:child_process";

// Automatically detect Vercel environment and set NITRO_PRESET
// guard:allow-env-credential — build-time deployment preset selection
if (process.env.VERCEL && !process.env.NITRO_PRESET) {
  // guard:allow-env-credential — build-time deployment preset selection
  process.env.NITRO_PRESET = "vercel";
}

try {
  execSync("agent-native build", {
    stdio: "inherit",
    env: process.env,
  });
} catch (error) {
  process.exit(error.status || 1);
}
