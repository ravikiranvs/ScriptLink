/* eslint-disable */
import sayHello from './say-hello';

let context = null, pnp = null;

describe('SayHello', function () {
  beforeEach(function () {
    context = {
      SP: {
        SOD: {
          notifyScriptLoadedAndExecuteWaitingJobs: sinon.spy()
        },
        UI: {
          Notify: {
            addNotification: sinon.spy()
          }
        }
      },
      ExecuteOrDelayUntilScriptLoaded: sinon.spy()
    };

    pnp = {
      storage: {
        session: {
          get: sinon.stub(),
          put: sinon.stub()
        }
      },
      sp: {
        web: {
          select: sinon.stub()
        }
      }
    }
  });

  it('shows notification from cached data', function () {
    // SETUP MOCKS
    const message = 'message';
    pnp.storage.session.get.withArgs('say-hello').onFirstCall().returns(message);

    // EXECUTE CODE
    sayHello(context, pnp);

    // ASSERT
    expect(context.ExecuteOrDelayUntilScriptLoaded.calledOnce).to.be.ok;
    expect(context.ExecuteOrDelayUntilScriptLoaded.firstCall.args[1]).to.equal('sp.js');
    expect(context.ExecuteOrDelayUntilScriptLoaded.firstCall.args[0]).to.be.a('function');

    context.ExecuteOrDelayUntilScriptLoaded.firstCall.args[0]();

    expect(context.SP.UI.Notify.addNotification.calledOnce).to.be.ok;
    expect(context.SP.UI.Notify.addNotification.firstCall.args[0]).to.equal(message);
  });

  it('gets web title if cache is empty', function () {
    // SETUP MOCKS
    pnp.storage.session.get.withArgs('say-hello').onFirstCall().returns(null);
    const titleGetFunc = sinon.stub();
    const titleGetFuncPromise = titleGetFunc.returnsPromise();
    pnp.sp.web.select.withArgs('Title').onFirstCall().returns({
      get: titleGetFunc
    });
    titleGetFuncPromise.resolves({Title: 'WEB TITLE'});

    // EXECUTE CODE
    sayHello(context, pnp);

    // ASSERT
    expect(context.ExecuteOrDelayUntilScriptLoaded.calledOnce).to.be.ok;
    expect(context.ExecuteOrDelayUntilScriptLoaded.firstCall.args[1]).to.equal('sp.js');
    expect(context.ExecuteOrDelayUntilScriptLoaded.firstCall.args[0]).to.be.a('function');

    context.ExecuteOrDelayUntilScriptLoaded.firstCall.args[0]();

    expect(context.SP.UI.Notify.addNotification.calledOnce).to.be.ok;
    expect(context.SP.UI.Notify.addNotification.firstCall.args[0]).to.equal('WEB TITLE');
  });
});