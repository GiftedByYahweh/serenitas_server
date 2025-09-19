export function httpErrorHandler(error, request, response) {
  this.log.error(error);
  console.error(error);
  const errStatus = error.status || error.statusCode || 500;
  const isSystemError = errStatus >= 500;
  const errMessage = isSystemError ? 'Something went wrong' : error.message;
  response
    .status(errStatus)
    .send({ message: errMessage, statusCode: errStatus });
}
