// Car.js

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand === 'string') {
      this._brand = newBrand;
    } else {
      console.error('Invalid type for brand. Expected string.');
    }
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor === 'string') {
      this._motor = newMotor;
    } else {
      console.error('Invalid type for motor. Expected string.');
    }
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor === 'string') {
      this._color = newColor;
    } else {
      console.error('Invalid type for color. Expected string.');
    }
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
