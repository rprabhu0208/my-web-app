
// Webpack 3.x

'use strict';

const fs = require('fs');
var nodeModules = {};

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

fs.readdirSync('node_modules')
.filter(function(x) 
{
return ['.bin'].indexOf(x) === -1;
})
.forEach(function(mod) {
nodeModules[mod] = 'commonjs ' + mod;
});
 
module.exports = 
{
  
  entry: 
  {
    app: 
    [
      './src/server'
    ]
  },

  output: 
  {
    path: path.join(__dirname, './dist'),
    filename: 'app.js',
    publicPath: '/'
  },
  
  externals: nodeModules,
  
    target: 'node',
  
    node: 
    {
      // console: false,
      // global: false,
      // process: false,
      // Buffer: false,
      // __filename: true,
      __dirname: false
    },
  
  module: 
  {

    loaders: 
    [
      
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: 
        {
          presets: ['env']
        }
      },
      {
        test: /\.js?$/,
        include: /node_modules/,
        loader: 'file-loader'
       
      }

    ]

  },

  plugins: 
  [   
    new CopyWebpackPlugin(
      [
        {
          from: './src/public',
          to: './public'
        },
        {
          from: './src/views',
          to: './views'
        }
        ,
        {
          from: './package.json',
          to: './package.json'
        }
      ]
    )
  ],

  devServer: 
  {
    port : 3500
  }

};
