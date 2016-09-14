/* eslint-disable */
window.SP = {
  SOD: {
    executeFunc: sinon.spy(),
    registerSod: sinon.spy()
  }
};


require('./custom-action');

describe('Custom Action', function () {
  it('requests for the loader file', function () {
    expect(window.SP.SOD.registerSod.calledOnce).to.be.ok;
    expect(window.SP.SOD.registerSod.calledWith('say-hello-loader.js')).to.be.ok;
  });

  it('registers a callback func for loader script load', function () {
    expect(window.SP.SOD.executeFunc.calledOnce).to.be.ok;
    expect(window.SP.SOD.executeFunc.calledWith('say-hello-loader.js')).to.be.ok;
  });
});