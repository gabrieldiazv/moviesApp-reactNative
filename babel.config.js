module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        envName: 'APP_ENV',
        path: '.env',
      },
    ],
    // reanimated siempre es el ultimo
  ],
};
