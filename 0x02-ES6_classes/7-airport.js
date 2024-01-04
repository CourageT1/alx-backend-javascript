// Airport.js

export default class Airport {
  constructor(name, code) {
    this._name = typeof name === 'string' ? name : '';
    this._code = typeof code === 'string' ? code : '';
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.error('Invalid type for name. Expected string.');
    }
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode === 'string') {
      this._code = newCode;
    } else {
      console.error('Invalid type for code. Expected string.');
    }
  }

  toString() {
    return this._code; // Default string description returns the airport code
  }
}
