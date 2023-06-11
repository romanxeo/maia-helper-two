// need for svg files
export function buildSvgLoader() {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };
}
