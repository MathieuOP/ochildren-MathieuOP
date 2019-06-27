// Node import
const path = require('path');

// Plugins de traitement pour dist/
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// Config pour le devServer
const host = 'localhost';
const port = 3000;

const devMode = process.env.NODE_ENV !== 'production';

// Config de Webpack
module.exports = {
  // Passe le build par dèfaut en déeveloppement
  mode: 'development',
  // Expose le dossier src/ pour les imports
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/')
    },
    extensions: ['.js', '.json', '.d.ts', '.ts', '.tsx']
  },
  // Points d'entrée pour le travail de Webpack
  entry: {
    app: [
      // Styles
      './src/styles/index.sass',
      // JS
      './src/index.js'
    ]
  },
  // Sortie
  output: {
    // Nom du bundle
    filename: 'app.js',
    // Nom du bundle vendors si l'option d'optimisation / splitChunks est activée
    chunkFilename: '[name].js',
    // Cible des bundles
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // Optimisation pour le build
  optimization: {
    // Code spliting
    splitChunks: {
      chunks: 'all'
    },
    // Minification
    minimizer: [
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: false // passer à true pour JS source maps
      // }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  context: __dirname,
  // Modules
  module: {
    rules: [
      // JS / TS
      {
        test: /\.(js|ts|tsx)$/,
        exclude: {
          test: [/node_modules$/, /src\/(\S+\/)*\w+\.exemple\.(js|ts|tsx)$/]
        },
        use: [
          // babel avec une option de cache
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      },
      // CSS / SASS / SCSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // style-loader ou fichier
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          // Chargement du CSS
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')],
              sourceMap: true
            }
          },
          // SASS
          'sass-loader'
        ]
      },
      // Images
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'src/assets/img',
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    overlay: true, // Overlay navigateur si erreurs de build
    stats: 'minimal', // Infos en console limitées
    progress: true, // progression du build en console
    inline: true, // Rechargement du navigateur en cas de changement
    open: true,
    historyApiFallback: true,
    host: host,
    port: port
  },
  plugins: [
    // Permet de prendre le index.html de src comme base pour le fichier de dist/
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    // Permet d'exporter les styles CSS dans un fichier css de dist/
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyPlugin([{ from: 'src/assets', to: 'src/assets' }])
  ]
};
