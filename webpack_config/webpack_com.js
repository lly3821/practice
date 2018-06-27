const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = resolve(__dirname, '../')
module.exports={
    entry:{
        index: join(rootPath, 'src/index.js')
    },
    output:{
        filename:'[name].bundle.js',
        path: join(rootPath, 'dist'),
        publicPath: '/',
    },
    resolve:{
        extensions:['.js','.jsx','json','.css'],
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            title: '测试',
            template: join(rootPath, 'index.html')
        })
    ],
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node_modules/,
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
            {
                test:/\.(png|jpg|svg|gif)$/,
                use:['file-loader'],
            }
        ]
    }

}
