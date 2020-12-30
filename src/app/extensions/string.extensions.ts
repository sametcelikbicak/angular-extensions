declare global {
  interface String {
    toCamelCase(): string;
    toPascalCase(): string;
    toCapitalizeFirstLetter(): string;
  }
}

String.prototype.toCamelCase = function(): string {
  return this.replace(/(?:^\w|[A-Z]|-|\b\w)/g, (character, index) =>
    index === 0 ? character.toLocaleLowerCase() : character.toLocaleUpperCase()
  );
};

String.prototype.toPascalCase = function(): string {
  return this.replace(/(?:^\w|[A-Z]|-|\b\w)/g, firstCharacter =>
    firstCharacter.toLocaleUpperCase()
  );
};

String.prototype.toCapitalizeFirstLetter = function(): string {
  return this.charAt(0).toLocaleUpperCase() + this.slice(1);
};

export {};
