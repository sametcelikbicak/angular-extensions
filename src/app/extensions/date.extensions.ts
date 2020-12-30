declare global {
  interface Date {
    toStringFormat(): string;
  }
}

Date.prototype.toStringFormat = function(): string {
  return this.toISOString().substring(0, 10);
};

export {};
