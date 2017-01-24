
function insert_shrug(info, tab) {
	chrome.tabs.sendMessage(tab.id, "clicked_element", function(cb) {
		//--
	});
}

var id = chrome.contextMenus.create({"title": "Shrug", "contexts":["editable"],
								   "onclick": insert_shrug});