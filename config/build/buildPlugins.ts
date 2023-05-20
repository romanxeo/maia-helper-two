import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {IBuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins(options: IBuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: options.paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }), //for extract css for each js file
  ]
}