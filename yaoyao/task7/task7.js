var btnsup = document.getElementsByClassName('btnup');
var btnsdown = document.getElementsByClassName('btndown');
var data = [];
var row = 3;
for (var i = 0; i < btnsup.length; i++) {
	(function (i) {
		// body...
		btnsup[i].onclick = function () {
			// body...
			console.log(i);
			setData();
			setWrite();
			descRow(i);
			rowShow();
		}
	})(i);	
}
for (var i = 0; i < btnsdown.length; i++) {
	(function (i) {
		// body...
		btnsdown[i].onclick = function () {
			// body...
			console.log(i);
			setData();
			setWrite();
			ascRow(i);
			rowShow();
		}
	})(i);	
}
function setData() {
	// body...
	for(var i = 0; i <= row; i++) {
		data[i] = [];
	}
}
function setWrite() {
    var trs = document.getElementsByTagName('tr');
    for (var i = 1; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        for (var j = 0; j < tds.length; j++) {

            tds[j].contentEditable = true;
            data[i][j] = tds[j].innerText;
        }
    }
    console.log(data);
}
function rowShow() {
	// body...
	var trs = document.getElementsByTagName('tr');
    for (var i = 1; i < trs.length; i++) {
        var tds = trs[i].getElementsByTagName('td');
        for (var j = 0; j < tds.length; j++) {

           tds[j].innerText = data[i][j];
        }
    }
}
function descRow(rownum) {
	// body...
	console.log(rownum);
	rownum++;
	for (var i = 0; i <= row; i++) {
		for (var j = i+1; j <= row; j++) {
			if (data[i][rownum] < data[j][rownum]) {
				temp = data[j];
				data[j] = data[i];
				data[i] = temp;
			}
		}
	}
	console.log(data[1][rownum],data[2][rownum],data[3][rownum]);
	console.log(data);
}
function ascRow(rownum) {
	// body...
	console.log(rownum);
	rownum++;
	for (var i = 1; i <= row; i++) {
		for (var j = i+1; j <= row; j++) {
			if (data[i][rownum] > data[j][rownum]) {
				temp = data[j];
				data[j] = data[i];
				data[i] = temp;
			}
		}
	}
	console.log(data);
}