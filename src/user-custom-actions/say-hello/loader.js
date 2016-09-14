import MDS from '../../MDS';
import config from './config';
import pnp from 'sp-pnp-js';

const SayHelloNamespace = config.getNamespace();

SayHelloNamespace.Loader = (context) => {
  const sayHelloCustActionLoader = () => {
    var url = 'http://localhost:7777/scripts/say-hello.bundle.js';
    context.SP.SOD.registerSod('say-hello.js', url);
    context.SP.SOD.executeFunc('say-hello.js', null, function () {
      SayHelloNamespace.Script(context, pnp);
    });

    context.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('say-hello-loader.js');
  };

  MDS('http://localhost:7777/scripts/say-hello-loader.bundle.js', sayHelloCustActionLoader);
};

export default SayHelloNamespace.Loader;