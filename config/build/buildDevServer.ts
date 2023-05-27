import {IBuildOptions} from "./types/config";
import type {Configuration as DevServerConfigurations} from 'webpack-dev-server';

export function buildDevServer(options: IBuildOptions): DevServerConfigurations {
  return {
    port: options.port,
    open: true, //for automatic open page with our application in browser
    historyApiFallback: true, //allow to proxy requests through a specified index page //проксировать через корневую страницу
    hot: true, //for hot reload builder
  }
}