module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@app': './src/app',
          '@theme': './src/app/theme',
          '@utils': './src/app/utils',
          '@types': './src/app/types',
          '@features': './src/features',
          '@home': './src/features/home',
          '@addresses': './src/features/addresses',
          '@categories': './src/features/categories',
          '@search': './src/features/imagesearch',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@assets': './src/assets',
          '@components': './src/common/components',
          '@hooks': './src/common/hooks',
          '@contexts': './src/common/contexts',
        },
      },
    ],
  ],
};
