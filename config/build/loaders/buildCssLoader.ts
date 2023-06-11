import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  // need for import css in project
  return {
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
}
