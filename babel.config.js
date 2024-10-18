module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          "~/components": "./src/components",
          "~/screens": "./src/screens",
          "~/assets": "./src/assets",
          "~/hooks": "./src/hooks",
          "~/api": "./src/api",
          "~/redux": "./src/redux",
          "~/navigation": "./src/navigation",
          "~/theme": "./src/theme",
          "~/utils": "./src/utils",
          "~/container": "./src/container",

        },
      },
    ],

  ],

  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
