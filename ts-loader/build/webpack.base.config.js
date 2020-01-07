const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    // loader: 'ts-loader',
                    // options: {
                    //     // 开启之后，编译器只做语言转换，不做类型检查。
                    //     // 相当于快速构建。
                    //     transpileOnly: true
                    // },
                    loader: 'awesome-typescript-loader',
                    options: {
                        transpileOnly: true
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new ForkTsCheckerWebpackPlugin()
        new CheckerPlugin()
    ]
}
