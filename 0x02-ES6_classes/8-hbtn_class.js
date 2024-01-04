// HolbertonClass.js

export default class HolbertonClass {
  constructor(size, location) {
    this._size = typeof size === 'number' ? size : 0;
    this._location = typeof location === 'string' ? location : '';
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    if (typeof newSize === 'number') {
      this._size = newSize;
    } else {
      console.error('Invalid type for size. Expected number.');
    }
  }

  get location() {
    return this._location;
  }

  set location(newLocation) {
    if (typeof newLocation === 'string') {
      this._location = newLocation;
    } else {
      console.error('Invalid type for location. Expected string.');
    }
  }

  valueOf() {
    return this._size; // When cast into a Number, return the size
  }

  toString() {
    return this._location; // When cast into a String, return the location
  }
}
