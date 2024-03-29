import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: './dist/bin',
    lib: {
      entry: './lib/bin/del-lock-dependencies.ts',
      formats: ['cjs'],
      fileName: 'del-lock-dependencies',
    }
  }
})
