import MDS, {mdsEnabled} from '../../MDS';
import config from './config';

export const sayHelloCustAction = () => {
  var url = 'http://localhost:7777/scripts/say-hello-loader.bundle.js' + (mdsEnabled() ? '' : '?' + encodeURIComponent((new Date()).getTime()));
  window.SP.SOD.registerSod('say-hello-loader.js', url);
  window.SP.SOD.executeFunc('say-hello-loader.js', null, function () {
    const SayHelloNamespace = config.getNamespace();
    SayHelloNamespace.Loader(window);
  });
};

MDS('/Style%20Library/scripts/say-hello-custom-action.bundle.js', sayHelloCustAction);