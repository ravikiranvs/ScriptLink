export default class SelectedTextSearchHelper {
  constructor() {
    this.savedText = null;
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  Init() {
    document.body.insertAdjacentHTML('beforeend', '<div id="share-button" style="position:absolute; top:-9999px; left:-9999px; z-index:9999;"><button style="padding: 0px; min-width:20px;"><span style="height:20px;width:20px;position:relative;display:inline-block;overflow:hidden;"><img src="/_layouts/15/images/searchresultui.png?rev=40" style="position: absolute; left: -1px; top: -69px;"></span></button></div>');
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

    window.location.href = ('/_layouts/15/start.aspx#/_layouts/15/osssearchresults.aspx?k=' + this.savedText);

    this.removeSelection();
    return false;
  }
}