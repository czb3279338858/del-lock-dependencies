import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      tsconfigPath: './dist.tsconfig.json'
    }),
  ],
  build: {
    outDir: "./dist",
    lib: {
      entry: './lib/index.ts',
      name: 'DelLockDependencies',
      fileName: 'del-lock-dependencies',
    }
  }
})
