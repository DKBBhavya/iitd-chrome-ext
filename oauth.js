chrome.storage.sync.get(["username"], function(user) {
	document.getElementsByName("username")[0].value = user.username;
});
chrome.storage.sync.get(["pass"], function(user) {
	document.getElementsByName("password")[0].value = user.pass;
});