const webpack = require('webpack')
const ExtractTextPluguin = require('extract-text-webpack-plugin')

module.exports={
  entry:'./ex/index.js',
  output:{
      path:__dirname + '/public',
      filename: './bundle.js'

  },
  devServer:{
    port:8080,
    contentBase: './public'
  },

  plugins:[
    new ExtractTextPluguin('app.css')
  ],

module:{
loaders:[{
    test: /.js?$/,
      loader:'babel-loader',
      exclude: /node_modules/,
        query:{
          presets: ['es2015','react'],
          plugins:['transform-object-rest-spread']
        }  
      },{test:/\.css$/,
        loader: ExtractTextPluguin.extract("style-loader","css-loader")
    }]
    }
}