class CoffeeScriptError extends Error {
  constructor(error) {
    super(error);

    this.name = "CoffeeScriptError";
  }
}

export default CoffeeScriptError;
