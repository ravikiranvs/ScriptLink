import MDS from '../../MDS';
import pnp from 'sp-pnp-js';

MDS('http://localhost:7777/scripts/say-hello.bundle.js', () => {
  console.log('Hello from say-hello!');
  pnp.sp.web.select('Title').get().then((data) => {
    console.log(data);
  });
  // SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('say-hello.js');
});