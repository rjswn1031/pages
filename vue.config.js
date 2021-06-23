module.exports = {
    publicPath: '/pages/',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/pages/'
    : '/',
    outputDir: './docs'
}