import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const input = path.resolve(__dirname, 'index.js');
const cjsOutputDirectory = path.resolve(__dirname, 'dist', 'cjs');
const esmOutputDirectory = path.resolve(__dirname, 'dist', 'esm');
const isExternal = id => !id.startsWith('.') && !id.startsWith('/');

export default [
  {
    input,
    output: {
      dir: cjsOutputDirectory,
      format: 'cjs',
      interop: 'auto',
      preserveModules: true,
    },
    external: isExternal,
    plugins: [
      nodeResolve(),
    ],
  },
  {
    input,
    output: {
      dir: esmOutputDirectory,
      format: 'esm',
      preserveModules: true,
    },
    external: isExternal,
    plugins: [
      nodeResolve(),
    ],
  },
];
