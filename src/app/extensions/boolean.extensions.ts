declare global {
  interface Boolean {
    not(): boolean;
  }
}

Boolean.prototype.not = function(): boolean {
  return !this;
};

export {};
