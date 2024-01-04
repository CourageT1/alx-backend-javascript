// Building.js

export default class Building {
  constructor(sqft) {
    this._sqft = typeof sqft === 'number' ? sqft : 0;

    if (this.constructor === Building) {
      throw new Error('Abstract class Building cannot be instantiated directly.');
    }

    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }
}
