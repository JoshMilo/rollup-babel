export default {
  entry: 'src/index.js',
  dest: 'build/js/index.min.js',
  format: 'iife',
  sourceMap: 'inline',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ]
};