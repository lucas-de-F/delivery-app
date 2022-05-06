module.exports = {
  include: ['src/**/*.js'],
  exclude: [
    '**/*.{test,spec}.js',
    'src/database/**/*.js',
    'src/api/server.js',
  ],
  reporter: [
    'lcov',
    'text',
    'text-summary',
    'json-summary',
  ],
};
