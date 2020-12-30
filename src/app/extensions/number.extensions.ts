declare global {
  interface Number {
    isNAN(): boolean;
  }
}

Number.prototype.isNAN = function(): boolean {
  return isNaN(this);
};

export {};
