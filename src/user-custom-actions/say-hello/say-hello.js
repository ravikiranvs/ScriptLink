import MDS from '../../MDS';

MDS('http://localhost:7777/scripts/say-hello.bundle.js', () => {
  console.log('Hello from say-hello!');
  // SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('say-hello.js');
});