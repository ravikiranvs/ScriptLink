/* eslint-disable */
import SelectedTextSearchHelper from './search-selected-text';
import jQuery from 'jquery';

document.body.insertAdjacentHTML('beforeend', '<p id="content">This is some sample text</p>');
new SelectedTextSearchHelper().Init();

describe('Search Selected Text Helper', function () {
  it('has search button on page', function () {
    expect(jQuery('#share-button').length).to.equal(1);
  });

  it('Shows Search popup on text selection', function (done) {
    var range = document.createRange();
    const pContent = document.getElementById('content');
    range.setStart(pContent.firstChild, 0);
    range.setEnd(pContent.firstChild, 10);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.onmouseup({ pageY: 50, pageX: 50 });
    setTimeout(function () {
      const buttonTopNew = jQuery('#share-button').css('top');
      const buttonLeftNew = jQuery('#share-button').css('left');

      expect(buttonTopNew).to.equal('50px');
      expect(buttonLeftNew).to.equal('50px');

      var sel = window.getSelection();
      sel.removeAllRanges();
      done();
    }, 100);
  });

  // it('Hides Search popup on button click', function (done) {
  //   var range = document.createRange();
  //   const pContent = document.getElementById('content');
  //   range.setStart(pContent.firstChild, 0);
  //   range.setEnd(pContent.firstChild, 10);
  //   var sel = window.getSelection();
  //   sel.removeAllRanges();
  //   sel.addRange(range);

  //   document.onmouseup({ pageY: 50, pageX: 50 });
  //   setTimeout(function () {
  //     jQuery('#share-button').find('button')[0].onmousedown();
  //     const buttonTopNew = jQuery('#share-button').css('top');
  //     const buttonLeftNew = jQuery('#share-button').css('left');

  //     expect(buttonTopNew).to.equal('-9999px');
  //     expect(buttonLeftNew).to.equal('-9999px');

  //     var sel = window.getSelection();
  //     sel.removeAllRanges();
  //     done();
  //   }, 100);
  // });
});