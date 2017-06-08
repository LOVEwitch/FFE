var panel = document.getElementById('panel');
var mask = document.getElementById('mask');
var confirm  = document.getElementById('confirm');
var cancel = document.getElementById('cancel');
//显示遮罩及面板
function show() {
	// body...
	mask.style.display = "block";
	panel.style.display = "block";
}
//隐藏遮罩及面板
function hide() {
	// body...
	mask.style.display = "none";
	panel.style.display = "none";
}

document.getElementById('btn').onclick = show;
confirm.onclick = hide;
cancel.onclick = hide;
mask.onclick = hide;