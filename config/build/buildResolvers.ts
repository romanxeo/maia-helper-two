import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types/config';

export function buildResolvers(options: IBuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'], // for absolute paths
    mainFiles: ['index'], // set main file in module as index
    alias: {}, // for Prefix when import
  };
}
