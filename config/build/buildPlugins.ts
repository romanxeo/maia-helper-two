import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { IBuildOptions } from './types/config';

export function buildPlugins(
  options: IBuildOptions,
): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: options.paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }), // for extract css for each js file
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(options.isDev),
    }), // for provide in app global envs
    new webpack.HotModuleReplacementPlugin(), // for hot reload
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }), // for bundle analyzer
  ];
}
