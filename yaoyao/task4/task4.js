var controltext = document.getElementById('controltext');
var controlbtn = document.getElementById('controlbtn');
var qizi = document.getElementById('qizi');

/*在输入框中允许输入如下指令，按下按钮后，使得正方形做相应动作
GO：向蓝色边所面向的方向前进一格（一格等同于正方形的边长）
TUN LEF：向左转（逆时针旋转90度）
TUN RIG：向右转（顺时针旋转90度）
TUN BAC：向右转（旋转180度）*/
controlbtn.onclick = function () {
	// body...

	if (controltext.value.toUpperCase() == "GO") {
		goStraight();
	} else if (controltext.value.toUpperCase() == "TUN LEF") {
		turnLeft();
	} else if (controltext.value.toUpperCase() == "TUN RIG") {
		rurnRig();
	} else if (controltext.value.toUpperCase() == "TUN BAC") {
		turnBac();
	}
};
//获取top、left、deg值，而后根据判断移动
//还存在边界判定问题的bug
function goStraight() {
	// body...
	var top,left;
	var deg = getDeg();
	var topstr = qizi.style.top.match(/\-?\d/g);
	console.log(topstr);
	var leftstr = qizi.style.left.match(/\-?\d/g);
	if (!topstr) {
		top = 0;
	} else {
		top = topstr.join("");
	}
	console.log(top);
	if (!leftstr) {
		left = 0;
	} else {
		left = leftstr.join("");
	}
	console.log(left);
	if ((top > -160) && (top < 200) && (left > -160) && (left < 200)) {
		console.log(deg)
		if (deg == 0) {
			top -= 40;
			if ((top <= -160) || (top >= 200) || (left <= -160) || (left >= 200)) {
				alert("已到达边界");
			}
		}else if (deg == 90) {
			left += 40;			
			if ((top <= -160) || (top >= 200) || (left <= -160) || (left >= 200)) {
				alert("已到达边界");
			}
		} else if (deg == 180) {
			top += 40;
			if ((top <= -160) || (top >= 200) || (left <= -160) || (left >= 200)) {
				alert("已到达边界");
			}
		} else if (deg == 270) {
			left -= 40;
			if ((top <= -160) || (top >= 200) || (left <= -160) || (left >= 200)) {
				alert("已到达边界");
			}
		}
	}
	qizi.style.left = left + "px";
	qizi.style.top = top + "px";
	
	
}
//获取目前的前进方向
function getDeg() {
	// body...
	var degstr = qizi.style.transform.match(/\-?\d/g);
	if (degstr) {
		deg = degstr.join("")%360;
	} else {
		deg = 0;
	}
	return deg;
}

function turnLeft() {
	// body...
	var degstr = qizi.style.transform.match(/\-?\d/g);	
	if (degstr) {
		deg = degstr.join("")%360;
		deg += 270;
		deg %= 360;
	}
	else {
		deg = 270;
	}
	qizi.style.transform = "rotate(" + deg + "deg)";
	console.log(deg);
	return deg;
}
function rurnRig() {
	// body...
	var degstr = qizi.style.transform.match(/\-?\d/g);	
	if (degstr) {
		deg = degstr.join("")%360;
		deg += 90;
		deg %= 360;
	}
	else {
		deg = 90;
	}
	qizi.style.transform = "rotate(" + deg + "deg)";
	console.log(deg);
	return deg;
}
function turnBac() {
	// body...
	var degstr = qizi.style.transform.match(/\-?\d/g);	
	if (degstr) {
		deg = degstr.join("")%360;
		deg += 180;
		deg %= 360;
	}
	else {
		deg = 180;
	}
	qizi.style.transform = "rotate(" + deg + "deg)";
	console.log(deg);
	return deg;
}