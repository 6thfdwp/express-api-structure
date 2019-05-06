const BaseError = require('./BaseError');

class InvalidRequest extends BaseError {
  constructor(code = 2) {
    const message = {
      title: 'Invalid Request',
      body: 'This request is not valid'
    };
    super(code, message);
    this.httpStatus = 400;
  }
}

// class UnAuthorised extends BaseError {
//   //
// }

class Internal extends BaseError {
  constructor(code, errMessage, httpStatus = 500) {
    super(code, { title: 'Internal Error', body: errMessage });
    this.httpStatus = httpStatus;
  }
}

class LocationRequired extends BaseError {
  constructor(code = 10, httpStatus = 400) {
    const message = {
      title: 'Location Required',
      body: 'Need specific locations to query'
    };
    super(code, message);
    this.httpStatus = httpStatus;
  }
}

module.exports = { InvalidRequest, Internal, LocationRequired };
