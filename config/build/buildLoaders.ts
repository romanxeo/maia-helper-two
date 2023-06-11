import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

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
  const svgLoader = buildSvgLoader();

  // need for import css in project
  const cssLoader = buildCssLoader(isDev);

  return [
    fileLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ];
}
