class CoffeeScriptError extends Error {
  constructor(error) {
    super(error);

    this.name = "CoffeeScriptError";
  }
}

module.exports = CoffeeScriptError;
