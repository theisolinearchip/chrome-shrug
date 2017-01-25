
function insert_shrug(info, tab) {
	chrome.tabs.sendMessage(tab.id, "clicked_element", function(cb) {
		//--
	});
}


chrome.contextMenus.onClicked.addListener(insert_shrug);

chrome.runtime.onInstalled.addListener(function(details) {
	chrome.contextMenus.create({"title": "Shrug",
								"contexts":["editable"],
								"id": "paste_shrug"
							});
});