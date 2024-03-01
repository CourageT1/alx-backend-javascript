// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', () => {
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', () => {
    const totalAmount = 10;
    const totalShipping = 10;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;
  });
});
