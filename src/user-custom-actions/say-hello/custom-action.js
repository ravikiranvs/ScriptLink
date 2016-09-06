import MDS, {mdsEnabled} from '../../MDS';

const sayHelloCustAction = () => {
  console.log('Hello from custom-action!');
  var url = 'http://localhost:7777/scripts/say-hello-loader.bundle.js' + (mdsEnabled() ? '' : '?' + encodeURIComponent((new Date()).getTime()));
  SP.SOD.registerSod('say-hello-loader.js', url);
  SP.SOD.executeFunc('say-hello-loader.js', null, function () {
    console.log('Hello from custom-action-executeFunc!');
  });
};

MDS('/Style%20Library/scripts/say-hello-custom-action.bundle.js', sayHelloCustAction);