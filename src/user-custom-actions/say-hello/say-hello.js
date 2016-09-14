// import MDS from '../../MDS';
import SelectedTextSearchHelper from './search-selected-text';
import config from './config';

const SayHelloNamespace = config.getNamespace();

SayHelloNamespace.Script = (context, pnp) => {
  new SelectedTextSearchHelper().Init();
  const cachedData = pnp.storage.session.get('say-hello');
  if (!cachedData || cachedData == '') {
    pnp.sp.web.select('Title').get().then((data) => {
      pnp.storage.session.put('say-hello', data.Title);
      context.ExecuteOrDelayUntilScriptLoaded(function () { context.SP.UI.Notify.addNotification(data.Title, false); }, 'sp.js');
    });
  } else {
    context.ExecuteOrDelayUntilScriptLoaded(function () { context.SP.UI.Notify.addNotification(cachedData, false); }, 'sp.js');
  }
  context.SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs('say-hello.js');
};

export default SayHelloNamespace.Script;