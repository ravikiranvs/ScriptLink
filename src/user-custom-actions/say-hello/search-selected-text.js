export default class SelectedTextSearchHelper {
  constructor() {
    this.savedText = null;
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  Init() {
    document.body.insertAdjacentHTML('beforeend', '<div id="share-button" style="position:absolute; top:-9999px; left:-9999px; z-index:9999;"><button>Search</button></div>');
    this.btnWrap = document.getElementById('share-button');
    this.btnShare = this.btnWrap.children[0];

    document.onmouseup = this.onMouseUp;
    this.btnShare.onmousedown = this.onClick;
  }

  onMouseUp(e) {
    this.savedText = this.saveSelection();

    setTimeout(() => {
      var isEmpty = this.savedText.toString().length === 0;
      this.btnWrap.style.top = (isEmpty ? -9999 : e.pageY) + 'px';
      this.btnWrap.style.left = (isEmpty ? -9999 : e.pageX) + 'px';
      this.restoreSelection();
    }, 50);

    this.restoreSelection(this.savedText);
  }

  saveSelection() {
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0);
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }
    return '';
  }

  restoreSelection(range) {
    if (range) {
      if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (document.selection && range.select) {
        range.select();
      }
    }
  }

  removeSelection() {
    if (window.getSelection) {
      var sel = window.getSelection();
      sel.removeAllRanges();
    }
  }

  onClick() {
    if (!this.savedText) return;

    this.btnWrap.style.top = '-9999px';
    this.btnWrap.style.left = '-9999px';

    window.location.href = ('http://dwp-sp2016dev:100/_layouts/15/start.aspx#/_layouts/15/osssearchresults.aspx?k=' + this.savedText);

    this.removeSelection();
    return false;
  }
}

// document.body.insertAdjacentHTML('beforeend', '<div id="share-button" style="background-color:white; border:1px solid black; padding:10px; position:absolute; top:-9999px; left:-9999px; z-index:9999; box-shadow:0 1px 3px rgba(0,0,0,.4);"><button>Share!</button></div>');

// var savedText = null;

// function saveSelection() {
//   if (window.getSelection) {
//     var sel = window.getSelection();
//     if (sel.getRangeAt && sel.rangeCount) {
//       return sel.getRangeAt(0);
//     }
//   } else if (document.selection && document.selection.createRange) {
//     return document.selection.createRange();
//   }
//   return null;
// }

// function restoreSelection(range) {
//   if (range) {
//     if (window.getSelection) {
//       var sel = window.getSelection();
//       sel.removeAllRanges();
//       sel.addRange(range);
//     } else if (document.selection && range.select) {
//       range.select();
//     }
//   }
// }

// var btnWrap = document.getElementById('share-button'),
//     btnShare = btnWrap.children[0];

// document.onmouseup = function(e) {

//   savedText = saveSelection(); // Save selection on mouse-up

//   setTimeout(function() {

//     var isEmpty = savedText.toString().length === 0; // Check selection text length

//     // set sharing button position
//     btnWrap.style.top = (isEmpty ? -9999 : e.pageY) + 'px';
//     btnWrap.style.left = (isEmpty ? -9999 : e.pageX) + 'px';

//   }, 10);

// };

// btnShare.onmousedown = function(e) {

//   if (!savedText) return;

// window.location.href = ("http://dwp-sp2016dev:100/_layouts/15/start.aspx#/_layouts/15/osssearchresults.aspx?k=" + savedText);

//   restoreSelection(savedText); // select back the old selected text

//   // hide if we are done
//   setTimeout(function() {
//     btnWrap.style.top = '-9999px';
//     btnWrap.style.left = '-9999px';
//   }, 1000);

//   return false;

// };