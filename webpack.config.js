const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // ... other configurations ...

  optimization: {
    minimizer: [
      new TerserPlugin({
        // Terser options go here, if needed
        // Example:
        // terserOptions: {
        //   compress: {
        //     drop_console: true,
        //   },
        // },
      }),
    ],
  },
};
