// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: './testing/setup.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'html', 'json-summary'],
      exclude: ['src/index.ts'],
      all: true,
    },
  },
});
