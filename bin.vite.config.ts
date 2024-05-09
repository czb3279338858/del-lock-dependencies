import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: './dist/bin',
    lib: {
      entry: './lib/bin/del-lock-dependencies.ts',
      formats: ['umd'],
      name: 'DelLockDependencies',
      fileName: 'del-lock-dependencies',
    }
  }
})
