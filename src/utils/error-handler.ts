class ErrorHandler extends Error {
  private statusCode: number | unknown;
  public message: string;
  constructor(message?: string, statusCode?: number) {
    super(message)
    this.statusCode = statusCode;
    this.message = `${this.statusCode} ${message}`;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;