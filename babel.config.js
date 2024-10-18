// learn more about absolute path configuration here
// https://medium.com/@malikchohra/how-to-use-absolute-path-in-the-latest-react-react-native-version-fe88142a6f7e
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
    'react-native-reanimated/plugin'
  ],

  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
