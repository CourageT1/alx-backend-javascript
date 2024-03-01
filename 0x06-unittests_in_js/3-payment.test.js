// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM and correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const totalAmount = 100;
    const totalShipping = 20;

    sendPaymentRequestToApi(totalAmount, totalShipping);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', totalAmount, totalShipping)).to.be.true;

    calculateNumberSpy.restore(); // Restore the spy after use
  });
});
