import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { IBuildPaths } from '../build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: IBuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve!.modules!.push(paths.src); // for absolute pths for storiesbook
  config.resolve!.extensions!.push('.ts', '.tsx'); // add extensions for use typescript

  // for replace svg loader for storybook
  // @ts-ignore
  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module!.rules!.push(buildSvgLoader());

  config.module!.rules!.push(buildCssLoader(true));

  return config;
};
