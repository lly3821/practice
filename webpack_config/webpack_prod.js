const merge = require('webpack-merge')
const common = require('./webpack_com')

module.exports = merge(common,{
    mode:'production',
    devtool:'source-map'
})