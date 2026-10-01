import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    coverage: {
      include: ["app/**/*.{ts,tsx}", "components/**/*.tsx", "lib/**/*.{ts,tsx}"],
      reporter: ["text", "lcov", "html"],
    },
  },
});