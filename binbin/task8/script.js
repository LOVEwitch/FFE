//全局变量
var root = document.getElementById('root');
var rankarr = [];
var timer = 0;
var search_result = [];

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