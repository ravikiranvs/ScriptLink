import MDS from '../../MDS';

const sayHelloCustActionLoader = () => {
  console.log('Hello from loader!');
  var url = 'http://localhost:7777/scripts/say-hello.bundle.js';
  SP.SOD.registerSod('say-hello.js', url);
  SP.SOD.executeFunc('say-hello.js', null, function () {
    console.log('Hello from custom-action-loader-executeFunc!');
  });

  SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('say-hello-loader.js');
};

console.log('new');
MDS('http://localhost:7777/scripts/say-hello-loader.bundle.js', sayHelloCustActionLoader);