import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'nextra-theme-docs',
  entry: ['src/index.tsx'],
  format: 'esm',
  dts: true,
  external: ['@charisma-ai/nextra'],
  outExtension: () => ({ js: '.js' })
})
