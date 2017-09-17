var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PUB_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

function isProd() {
  var env = process.env.NODE_ENV;
  if (env === 'prod') {
    return true;
  }else {
    return false;
  }
}

function htmlPublish() {
  return new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html'
  })
}

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: PUB_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2'],
            plugins: ['transform-decorators-legacy']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?sourceMap']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    htmlPublish()
  ],
  devServer: { inline: true, port: 3000 }
};

module.exports = config;
