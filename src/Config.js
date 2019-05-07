class Config {
  static get port() {
    return process.env.PORT || 6000;
  }

  static get deployTarget() {
    return process.env.DEPLOY_TARGET || 'develop';
  }
}

module.exports = Config;
