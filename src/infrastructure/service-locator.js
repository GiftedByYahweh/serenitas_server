export class ServiceLocator {
  static #module = new Map();

  static get(moduleName) {
    return ServiceLocator.#module.get(moduleName);
  }

  static set(moduleName, exp) {
    return ServiceLocator.#module.set(moduleName, exp);
  }
}
