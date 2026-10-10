export class EditorError extends Error {
  constructor(status, code, message, details) {
    super(message);
    this.name = "EditorError";
    this.status = status;
    this.code = code;
    this.details = details;
  }
}
