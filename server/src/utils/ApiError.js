//13
// Import development debug tool,   npm i debug  ,go to package.json 加上一段script
// "devWindos": "set DEBUG=app:* & nodemon src/index"  Mac: "devMac": "DEBUG=app* nodemon src/index"
const debugError500 = require("debug")("app:error500");
class ApiError {
  constructor(code, message, err) {
    this.code = code;
    this.message = message;
    this.err = err;
  }

  // 400   bad request
  static badRequest(msg) {
    return new ApiError(400, `Bad Request: ${msg}`);
  }
  // 404   user mistake   not found
  static notFound() {
    return new ApiError(404, "Resource Not Found");
  }

  // [413] Entity Too Large
  static tooLarge(msg) {
    return new ApiError(413, `Upload Failed: ${msg}`);
  }

  // [422] Unprocessable Entity
  static cannotProcess(msg) {
    return new ApiError(422, `Upload Failed: ${msg}`);
  }
  // 500   Internal Server  Error
  static internal(msg, err) {
    debugError500(err);
    return new ApiError(500, `Internal Server Error: ${msg}`);
  }
}
module.exports = ApiError;
