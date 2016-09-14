// /* eslint-disable */
// var localContext = {
//   window: {
//     SP: {
//       SOD: {}
//     }
//   }
// };


// // const test = require('./custom-action');

// describe('Custom Action', function () {
//   beforeEach(function () {
//     localContext.window.SP.SOD.executeFunc = sinon.spy();
//     localContext.window.SP.SOD.registerSod = sinon.spy();

//     with (localContext) {
//       require('./custom-action');
//     }
//   });
//   it('requests for the loader file', function () {
//     // console.log('Custom Action - requests for the loader file' + JSON.stringify(window.SP));
//     expect(localContext.window.SP.SOD.registerSod.called).to.be.ok;
//     expect(localContext.window.SP.SOD.registerSod.calledWith('say-hello-loader.js')).to.be.ok;
//     // expect(registerSodCalls[0].scriptUrl).to.contain('say-hello-loader.bundle.js');
//   });

//   it('registers a callback func for loader script load', function () {
//     expect(localContext.window.SP.SOD.executeFunc.called).to.be.ok;
//     expect(localContext.window.SP.SOD.executeFunc.calledWith('say-hello-loader.js')).to.be.ok;
//     // expect(executeFuncCalls[0].entryFunc).to.be.a('function');
//   });
// });

// // window.SP = undefined;