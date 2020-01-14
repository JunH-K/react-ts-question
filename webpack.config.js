const path = require( 'path' );
const webpack = require( 'webpack' );

module.exports = {
  mode: 'development',
  devtool: 'source-map',

  entry: {
    app: [ './src/index' ],
  },

  resolve: {
    extensions: [ ".ts", ".tsx", '.js',".jsx" ]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/i,
        use: [ 'style-loader', 'css-loader' ],
      } ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin( { debug: false } ),
  ],

  output: {
    path: path.join( __dirname, 'dist' ),
    filename: 'app.js',
    publicPath: "dist/",
  },

};
