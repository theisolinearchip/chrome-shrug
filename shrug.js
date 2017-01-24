var shrug_ascii = "¯\\_(ツ)_/¯";
var clicked_element = null;

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
			if (clicked_element.tagName && (clicked_element.tagName.toLowerCase() == "input" || clicked_element.tagName.toLowerCase() == "textarea")) {
				// input or textarea
				clicked_element.value += shrug_ascii;	
			} else if (clicked_element.hasAttribute("contenteditable")) {
				// editable element
				clicked_element.innerHTML += shrug_ascii;
			}

		}
	}
);