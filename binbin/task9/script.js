//全局变量
var root = document.getElementById('root');
var rankarr = [];
var timer = 0;
var search_result = [];
var current_selected = null;

function render(callback=null) {    
	timer = 0;

    for (var i = 0; i < rankarr.length; i++) {
    	rankarr[i].style.background="#ffffff";
    	setTimeout(function(index){
    		return function(){
    			rankarr[index].style.background="green";
    		}
    	}(i), timer+=50)
    	setTimeout(function (index) {
    		// body...
    		return function () {
    			// body...
    			rankarr[index].style.background="#ffffff";
    			if(index == rankarr.length-1){
    				callback();
    			}
    		}
    	}(i),timer+=50)
    }
    
}
function preOrder(root,searchtext=null) {
	// body...
	if (root) {
		rankarr.push(root);
		if (root.innerText.split('\n')[0].match(searchtext)) {
			console.log(root.innerHTML);
			search_result.push(root);
		}
		var num = root.children;
		for (var i = 0; i < num.length; i++) {
			preOrder(num[i],searchtext);

		}		
	}

}

function bindClick() {
	// body...
	preOrder(root);
	rankarr.forEach(function (div) {
		// body...
		div.onclick = function (e) {
			// body...
			e.preventDefault();//阻止元素鼠标点击事件的默认行为;
      		e.stopPropagation();//防止事件冒泡;
      		removeClass("selected");
			this.className += " selected";
			current_selected = div;
		}
		
	})
}
function deleteNode(argument) {
	// body...
	current_selected.remove();
}
function insertNode(insert_text) {
	// body...
	current_selected.innerHTML += "<div class='level3'>" + insert_text + "</div>";
	bindClick();
}
function removeClass(classname = "selected") {
	// body...
	rankarr.forEach(function (div) {
		// body...
		var temp = div.className;
		if (hasClass(div,classname)) {
		    var reg = new RegExp('(\\s|^)'+classname+'(\\s|$)');
			div.className=div.className.replace(reg,' ');
		 }
	})
}
function hasClass(ele,cls) {
  return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function renderRes(){
	if (search_result.length) {
		alert("搜索到" + search_result.length + "条数据");
	} 
	for (var i = 0; i < search_result.length; i++) {
		search_result[i].style.background="red";
    }

}

function search(searchtext) {
	// body...
	search_result = [];
	rankarr = [];
	preOrder(root,searchtext);
	render(renderRes);
}
function inOrder(root) {
	// body...
	if (root) {	
		var num	= root.children;
		var i;
		for (i = 0; i < num.length/2; i++) {
			inOrder(num[i]);
		}	
		rankarr.push(root);
		for (; i < num.length; i++) {
			inOrder(num[i]);
		}
	}
}
function postOrder(root) {
	// body...
	if (root) {		
		var num = root.children;
		for (var i = 0; i < num.length; i++) {
			postOrder(num[i]);
		}	
		rankarr.push(root);
	}
}
document.getElementById('preorder').onclick = function() {
	// body...
	rankarr = []
	preOrder(root);
	render();
};   
document.getElementById('inorder').onclick = function () {
	// body...
	rankarr = []
	inOrder(root);
	render();
}
document.getElementById('postorder').onclick = function () {
	// body...
	rankarr = []
	postOrder(root);
	render();
}
document.getElementById('searchbtn').onclick = function () {
	// body...

	var searchtext = document.getElementById('searchtext').value;
	
	search(searchtext);
	console.log(searchtext);
}
window.onload = function () {
	// body...
	
	bindClick();
}
document.getElementById('insert_node').onclick = function () {
	// body...
	var insert_text = document.getElementById('insert_text').value;
	insertNode(insert_text);
}
document.getElementById("delete_node").onclick = function () {
	// body...
	deleteNode();
}