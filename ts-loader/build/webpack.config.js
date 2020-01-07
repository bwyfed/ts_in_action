const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const prodConfig = require('./webpack.prod.config')

// Wrong!
// let config = process.env.NODE_ENV === 'development' ? devConfig: prodConfig

module.exports = (env, argv) => {
    let config = argv.mode === 'development' ? devConfig : prodConfig;
    return merge(baseConfig, config);
}
