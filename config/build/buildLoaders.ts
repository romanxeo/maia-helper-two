import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from './types/config';

export function buildLoaders(options: IBuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  // Если не используем таймпскрипт - нужен babel-loader - транспилятор для перевода нового страндарта кода в старый
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  // need for file (png, jpeg) // you can extend it to woff2 woff example
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  // need for svg files
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  // need for import css in project
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from js strings instead 'style-loader' for extract css for each js file,
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: 'css-loader',
        options: {
          modules: {
            // auto: (resPath: string) => resPath.includes(".module."), if custom //for name css styles
            auto: true, // for name css styles
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]', // for name css style
          }, // need for css modules
        },
      },
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };

  return [
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ];
}
