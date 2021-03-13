module.exports = function (moduleOptions) {
    // Add middleware only with `nuxt dev` or `nuxt start`
    if (this.options.dev || this.options._start) {
      this.addServerMiddleware('~/api/contact.js')
      this.addServerMiddleware('~/api/certificate.js')
      this.addServerMiddleware('~/api/signup.js')
      this.addServerMiddleware('~/api/shop.js')
    }
  }