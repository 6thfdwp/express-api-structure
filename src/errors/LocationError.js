const BaseError = require('./BaseError');

class InvalidPostCode extends BaseError {
  constructor(code = 10) {
    const message = {
      title: 'Incorrect/Invalid Postcode Requested',
      body: 'Can not find store locations for the provided postcode'
    };
    super(code, message);
    this.httpStatus = 400;
  }
}

class InvalidSuburb extends BaseError {
  constructor(code = 11) {
    const message = {
      title: 'Incorrect/Invalid Suburb Requested',
      body: 'Can not find store locations for the provided suburb'
    };
    super(code, message);
    this.httpStatus = 400;
  }
}

module.exports = { InvalidPostCode, InvalidSuburb };
