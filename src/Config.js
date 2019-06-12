class Config {
  static get port() {
    return process.env.PORT || 6000;
  }

  static get deployTarget() {
    return process.env.DEPLOY_TARGET || 'develop';
  }

  // db credentials
  static get dbCredentials() {
    return {
      dialect: process.env.DB_DIALECT,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    };
  }
}

module.exports = Config;
