/* eslint-disable */
import loader from './loader';
import config from './config';

let context = null;
describe('Custom Action Loader', function () {
  beforeEach(function(){
    context = {
      SP:{
        SOD: {
          registerSod: sinon.spy(),
          executeFunc: sinon.spy(),
          notifyScriptLoadedAndExecuteWaitingJobs: sinon.spy()
        }
      }
    };

    loader(context);

  });

  it('requests for the CDN file', function () {
    expect(context.SP.SOD.registerSod.calledOnce).to.be.ok;
    expect(context.SP.SOD.registerSod.firstCall.args[0]).to.equal('say-hello.js');
    expect(context.SP.SOD.registerSod.firstCall.args[1]).to.contain('say-hello.bundle.js');
  });

  it('registers a callback func for when the CDN script is loaded', function () {
    expect(context.SP.SOD.executeFunc.calledOnce).to.be.ok;
    expect(context.SP.SOD.executeFunc.firstCall.args[0]).to.equal('say-hello.js');
    expect(context.SP.SOD.executeFunc.firstCall.args[2]).to.be.a('function');
  });

  it('registers notifies the calling script of it\'s load complete', function () {
    expect(context.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs.calledOnce).to.be.ok;
    expect(context.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs.firstCall.args[0]).to.equal('say-hello-loader.js');
  });
});