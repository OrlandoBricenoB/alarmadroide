class NotFound extends Error {
  constructor(message, options = {}) {
    super()

    const { code = 404, name, date } = options
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)

    this.name = name || 'NotFound';
    this.code = code;
    this.message = message || 'No data found.';
    this.date = date || Date.now();
  }
}

class BadRequest extends Error {
  constructor(message, options = {}) {
    super()

    const { code = 400, name, date } = options
    if (Error.captureStackTrace) Error.captureStackTrace(this, this.constructor)

    this.name = name || 'BadRequest';
    this.code = code;
    this.message = message || 'Please correct the parameters.';
    this.date = date || Date.now();
  }
}

export {
  NotFound,
  BadRequest
}
