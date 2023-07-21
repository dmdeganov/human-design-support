/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('node:path');

const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src/assets'),
      styles: path.resolve(__dirname, 'src/styles'),
    };
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {icon: true},
          },
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,
      //   type: 'asset/resource',
      // },
    ];
    // config.module.rules.push({
    //   test: /\.(svg)$/,
    //   use: ['@svgr/webpack', 'file-loader'],
    // });
    // config.module.rules.push({
    //   test: /\.(woff|woff2|eot|ttf|otf)$/,
    //   loader: 'file-loader',
    // });
    return config;
  },
};

module.exports = {
  ...nextConfig,
  compiler: {
    styledComponents: true,
  },
};
//
// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });
//
//     return config;
//   },
// };
