export function httpErrorHandler(error, request, response) {
  this.log.error(error);
  const errStatus = error.status ?? 500;
  const isSystemError = errStatus >= 500;
  const errMessage = isSystemError ? 'Something went wrong' : error.message;
  response.status(errStatus).send({ data: null, error: errMessage });
}
