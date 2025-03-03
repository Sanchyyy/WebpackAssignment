// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  // The entry point of your app
  // entry: './src/index.js', //source ke andr js file h
  mode: 'development',
  entry: {
    bundle:path.resolve(__dirname,'./src/index.js')
  }, //source ke andr js file h

  // The output bundle
  output: {
    filename: '[name].js',  //content has=singlepage application  ka name-bundle.[].js
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clean the output directory before emit
    assetModuleFilename:'[name][ext]',
  },

  // Enable source maps for debugging
  devtool: 'inline-source-map', //ignore

  // DevServer configuration with fallback for SPA routing
  devServer: {
    static: {directory:path.resolve(__dirname,'./dist')},
    historyApiFallback: true, // For SPA: redirects 404s to /index.html
    open: true,
    port:3000,
  },

  // Module rules to handle different file types
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, // Match both .sass and .scss files -regex 
        //kuch b add kro in test in regex , then use its loader
        use: [
          'style-loader', // Injects styles into DOM
          'css-loader',   // Turns CSS into CommonJS
          'sass-loader',  // Compiles Sass to CSS
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type :'asset/resource'

      }
      // If needed, add a rule for JavaScript (e.g., with Babel) here.
      // For vanilla JS, this may not be necessary.
    ],
  },

  // Plugins to enhance Webpack's functionality
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html', // Use our custom HTML file
      title: 'Webpack App',
      filename:'index.html',
      inject: 'body',
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/components/", to: "components" },
        { from: "./src/assets", to: "assets" },
        { from: "./src/pages", to: "pages" },
      ],
    }),
  ],
  
};