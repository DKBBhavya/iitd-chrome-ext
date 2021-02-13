var y = document.getElementById("login").innerHTML;
var a = y.indexOf("Please");
var z = y.slice(a, y.indexOf("=", a));
var res = 0;
if (z[7] == "a")
{
	var aa = z.indexOf(" ", 13);
	var n1 = parseInt(z.slice(13, aa));
	var n2 = parseInt(z.slice(aa + 3, z.indexOf(" ", aa + 3)));
	res = n1 + n2;
}
else if (z[7] == "s")
{
	var aa = z.indexOf(" ", 18);
	var n1 = parseInt(z.slice(18, aa));
	var n2 = parseInt(z.slice(aa + 3, z.indexOf(" ", aa + 3)));
	res = n1 - n2;
}
else if (z[13] == "s")
{
	var aa = z.indexOf(",", 13);
	res = parseInt(z.slice(aa + 2, z.indexOf(" ", aa + 2)));
}
else
{
	res = parseInt(z.slice(27, z.indexOf(" ", 27)));
}
var x = document.getElementById("valuepkg3");
x.value = res;
chrome.storage.sync.get(["username"], function(user) {
	document.getElementById("username").value = user.username;
});
chrome.storage.sync.get(["pass"], function(user) {
	document.getElementById("password").value = user.pass;
});
