function display1() {
	// body...
	document.getElementById("prompt1").style.display = "block";
}
function display2() {
	// body...
	document.getElementById("prompt2").style.display = "block";
}
function display3() {
	// body...
	document.getElementById("prompt3").style.display = "block";
}
function display4() {
	// body...
	document.getElementById("prompt4").style.display = "block";
}
function display5() {
	// body...
	document.getElementById("prompt5").style.display = "block";
}

function checkUsername() {
	// body...
	var checktext = document.getElementById("username");
	var correct = new Boolean(true);
	var len = 0;
	for (var i = 0; i < checktext.value.length; i++) {
		var charcode = checktext.value.charCodeAt(i);
		if (charcode >=0 && charcode <= 128) {
			len++;
		} else {
			len += 2;
		}
	}
	if (len >=4 && len <= 16) {
		prompt1.innerText = "名称格式正确";
		checktext.style.border = "1px solid green";
		return true;
	} else if (len == 0){
		prompt1.innerText = "姓名不能为空";
		checktext.style.border = "1px solid red";
		return false;
	} else {
		prompt1.innerText = "名称格式不正确";
		checktext.style.border = "1px solid red";
		return false;
	}

}
function checkPassword() {
	// body...
	var checktext = document.getElementById("password");
	var len = 0;
	for (var i = 0; i < checktext.value.length; i++) {
		var charcode = checktext.value.charCodeAt(i);
		if (charcode >=0 && charcode <= 128) {
			len++;
		} else {
			len += 2;
		}
	}
	if (len >=6 && len <= 16) {
		prompt2.innerText = "密码格式正确";
		checktext.style.border = "1px solid green";
	} else if (len == 0){
		prompt2.innerText = "密码不能为空";
		checktext.style.border = "1px solid red";
	} else {
		prompt2.innerText = "密码格式不正确";
		checktext.style.border = "1px solid red";
	}
}
function checkRepassword() {
	// body...
	var checktext = document.getElementById("repassword");
	var checktext1 = document.getElementById("password");
	var len = 0;
	for (var i = 0; i < checktext.value.length; i++) {
		var charcode = checktext.value.charCodeAt(i);
		if (charcode >=0 && charcode <= 128) {
			len++;
		} else {
			len += 2;
		}
	}
	if (len >=6 && len <= 16) {
		prompt3.innerText = "密码格式正确";
		checktext.style.border = "1px solid green";
		if (checktext.value == checktext1.value) {
			prompt3.innerText = "两次密码输入一致";
			checktext.style.border = "1px solid green";
		}
		else {
			prompt3.innerText = "两次密码输入不一致";
			checktext.style.border = "1px solid red";
		}
	} else if (len == 0){
		prompt3.innerText = "密码不能为空";
		checktext.style.border = "1px solid red";
	} else {
		prompt3.innerText = "密码格式不正确";
		checktext.style.border = "1px solid red";
	}
}
function checkEmail() {
	// body...
	var checktext = document.getElementById("email");
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.([a-zA-Z0-9_-])+)+/;

	if ( reg.test(checktext.value)) {
		prompt4.innerText = "邮箱格式正确";
		checktext.style.border = "1px solid green";
	}
	else if (checktext.value == "") {
		prompt4.innerText = "邮箱不能为空";
		checktext.style.border = "1px solid green";
	}
	else{
		prompt4.innerText = "邮箱格式不正确";
		checktext.style.border = "1px solid green";
	}
}
function checkTelephone() {
	// body...
	var checktext = document.getElementById("telephone");
	var reg = /^1\d{10}/;
	if ( reg.test(checktext.value)) {
		prompt5.innerText = "手机格式正确";
		checktext.style.border = "1px solid green";
	}
	else if (checktext.value == "") {
		prompt5.innerText = "手机号不能为空";
		checktext.style.border = "1px solid green";
	}
	else {
		prompt5.innerText = "手机格式不正确";
		checktext.style.border = "1px solid green";
	}
}
function checkAll() {
	// body...
	display1();
	display2();
	display3();
	display4();
	display5();
	checkUsername();
	checkPassword();
	checkRepassword();
	checkEmail();
	checkTelephone();
	if(checkUsername() && checkPassword() && checkRepassword() && checkEmail() && checkTelephone()){
		alert("验证通过");
	}
	else {
		alert("验证未通过");
	}
	

}
/*document.getElementById("btn").addEventListener('click',checkAll(obj));*/