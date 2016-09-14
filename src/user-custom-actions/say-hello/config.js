const config = {
  getNamespace: () => {
    window.UserCustomActions = window.UserCustomActions || {};
    window.UserCustomActions.SayHello = window.UserCustomActions.SayHello || {};

    return window.UserCustomActions.SayHello;
  }
};

export default config;