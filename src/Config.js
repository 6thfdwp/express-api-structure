class Config {
  static get port() {
    return process.env.PORT || 6000;
  }
}

module.exports = Config;
