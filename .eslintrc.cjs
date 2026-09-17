module.exports = {
  root: true,
  extends: "next/core-web-vitals",
  parserOptions: {
    babelOptions: {
      // Resolve from this project even when the editor opens its parent folder.
      presets: [require.resolve("next/babel")],
    },
  },
  settings: {
    next: {
      rootDir: __dirname,
    },
  },
};
