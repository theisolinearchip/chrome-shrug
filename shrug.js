var shrug_ascii = "¯\\_(ツ)_/¯";
var clicked_element = null;

// Based on:
// http://stackoverflow.com/questions/7404366/how-do-i-insert-some-text-where-the-cursor-is
// https://gist.github.com/srsudar/e9a41228f06f32f272a2
function insert_text_at_cursor(text) {
	var el = document.activeElement;
	var val = el.value;
	var endIndex;
	var range;
	var doc = el.ownerDocument;
	if (typeof el.selectionStart === 'number' &&
		typeof el.selectionEnd === 'number') {
		endIndex = el.selectionEnd;
		el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
		el.selectionStart = el.selectionEnd = endIndex + text.length;
	} else if (typeof doc.selection !== 'undefined' && doc.selection.createRange) {
		el.focus();
		range = doc.selection.createRange();
		range.collapse(false);
		range.text = text;
		range.select();
	} else {
		clicked_element.innerHTML += shrug_ascii;
	}
}

//add the listener inside the page to get the current element
document.addEventListener("mousedown", function(event) {
	if(event.button == 2) { 
		clicked_element = event.target;
	}
}, true);

//when the context menu is clicked (in the background) execute this
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request == "clicked_element") {

			insert_text_at_cursor(shrug_ascii);

		}
	}
);