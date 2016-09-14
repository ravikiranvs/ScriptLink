const enableMds = function (scriptRelativeUrl, entryFunc) {
  // eslint-disable-next-line no-undef
  if (typeof(RegisterModuleInit) == 'function') {
    // console.log('RegisterModuleInit for ' + scriptRelativeUrl);
    entryFunc();
    // eslint-disable-next-line no-undef
    RegisterModuleInit(scriptRelativeUrl, entryFunc);
  } else {
    // console.log('No RegisterModuleInit for ' + scriptRelativeUrl);
    entryFunc();
  }
};

const mdsEnabled = () => typeof(RegisterModuleInit) == 'function';

export default enableMds;

export {mdsEnabled};