class BaseError extends Error {
  constructor(code, message) {
    super(message.body);
    this.code = code;
    this.message = message;
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;
  }

  get output() {
    return {
      httpStatus: this.httpStatus,
      payload: {
        status_code: this.code,
        message_title: this.message.title,
        message: this.message.body
      }
    };
  }
}

module.exports = BaseError;
