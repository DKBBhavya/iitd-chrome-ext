chrome.storage.sync.get(["username"], function(user1) {
	document.getElementById("user").value = user1.username;
});
chrome.storage.sync.get(["pass"], function(user) {
	if (user.pass == "") {
		document.getElementById("pwd").value = "";
	} else {
		document.getElementById("pwd").value = "passwordprotectiontext";
	}
});
document.getElementById("up").onclick = function() {
	var b = document.getElementById("user");
	chrome.storage.sync.set({"username": b.value}, function() {});
	var c = document.getElementById("pwd");
	chrome.storage.sync.set({"pass": c.value}, function() {});
	c.value = "passwordprotectiontext";
	document.getElementById("up").innerHTML = "Updated";
	setTimeout(function() {
		document.getElementById("up").innerHTML = "Update";
	}, 2000);
};
document.getElementById("moodle").onclick = function() {
	window.open("https://moodle.iitd.ac.in/login/index.php");
};
document.getElementById("webmail").onclick = function() {
	window.open("https://webmail.iitd.ac.in/roundcube/");
};