import path from 'path';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import glob from 'glob';

export default {
  entry: {
    "bundle.js": glob.sync("build/static/?(js|css)/main.*.?(js|css)").map(f => path.resolve(__dirname, f)),
  },
  output: {
    filename: "build/static/js/bundle.js",
    // Cập nhật publicPath để sử dụng dấu ./ cho các tài nguyên
    publicPath: './',  // Thêm dấu ./ vào đường dẫn tài nguyên
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg|mp3|ogg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'assets/',
            publicPath: './assets/',
          },
        },
      },
    ],
  },
  
  plugins: [
    new UglifyJsPlugin(), 
    new HtmlWebpackPlugin({
      template: './src/index.html', // Tạo HTML từ template
      inject: 'body', // Chèn script và link vào cuối body
      scriptLoading: 'defer', // Thêm defer vào các script
      hash: true, // Thêm hash vào các tài nguyên để tránh caching
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
      // Tùy chỉnh đường dẫn của tài nguyên
      templateParameters: {
        assetsPath: './assets/', // Đường dẫn tài nguyên tương đối
      },
    })
  ],
};
