import MDS from '../../MDS';
import pnp from 'sp-pnp-js';
import SelectedTextSearchHelper from './search-selected-text';

MDS('http://localhost:7777/scripts/say-hello.bundle.js', () => {
  new SelectedTextSearchHelper().Init();
  console.log('Hello from say-hello!');
  const cachedData = pnp.storage.session.get('say-hello');
  if (!cachedData) {
    console.log('from rest');
    pnp.sp.web.select('Title').get().then((data) => {
      pnp.storage.session.put('say-hello', data.Title);
      console.log(data.Title);
    });
  } else {
    console.log('from cache');
    console.log(cachedData);
  }
  pnp.log.log('logging from say-hello.');
  // SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('say-hello.js');
});