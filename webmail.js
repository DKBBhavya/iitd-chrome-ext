chrome.storage.sync.get(["username"], function(user) {
	document.getElementById("rcmloginuser").value = user.username;
});
chrome.storage.sync.get(["pass"], function(user) {
	document.getElementById("rcmloginpwd").value = user.pass;
});