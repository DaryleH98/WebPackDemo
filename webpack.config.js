const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
var package = require('./package.json');
//add a rule to use ‘css-loader’ and ‘style-loader’ for .css files.
console.log(package.dependencies);

module.exports = {
    mode: 'production',
    //changed the value for entry property from a string to an object with two keys -app and vendor
    entry: {
        app: "./src/scripts/index.js",
       // vendor: Object.keys(package.dependencies),
    }, 
    output: { 
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js" 
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist/"),
        port: 9000
    },

    module:{
        rules:[
                {
                    test:/\.(s*)css$/, //or  test: /\.scss/,
                    use:[ 
                        {
                         loader: 'style-loader',
                         options: {
                            sourceMap:true,
                          },
                        },
                        
                        {
                         loader: 'css-loader', 
                         options: {
                            sourceMap: true,
                          },
                        },

                        // {
                        //   loader: 'resolve-url-loader',
                        //    options: {
                        //    root: path.resolve(__dirname, 'src'),
                        //    sourceMap: true,
                        //    },
                        // },

                        {
                         loader: 'sass-loader',
                         options: {
                            context: path.resolve(__dirname, 'src'),
                            root: path.resolve(__dirname, 'src'),
                            sourceMap: true,
                            includePaths: [path.resolve(__dirname, 'src/css'), path.resolve(__dirname, 'src')],
                          },
                        },
                        
                      ],
                 },
         ],
      },
    
    watch: true, 
    resolve: { 
        extensions: [".js", ".ts", '.css'],
        modules: [
            'node_modules'
          ]     
    
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash:true,
            title: 'Webpack-Demo-App',
            myPageHeader: 'Hello World',
            template: './src/index.html',
            filename: 'index.html'
        }) 
    ]
} 
/*
, we may want to create two bundles –app.bundle.js for all our application-specific code, 
  and another bundle vendor.bundle.js for all our npm dependencies and include the two bundles 
  in two separate <script> tags in your index.html. Lets how we can configure webpack to achieve this.
*/