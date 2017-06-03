
var root = document.getElementById('root');

var timer = 0;
function render(node) {
    // alert(node.tagName);

    node.style.background="#ffffff";
    setTimeout(function () {
        node.style.background="#ff524a";
    },timer+=500);
    setTimeout(function () {
        node.style.background="#ffffff";
    },timer+=500);
}
function preOrder(root) {
	// body...
	if (root) {
		render(root);
		preOrder(root.firstElementChild);
		preOrder(root.lastElementChild);
	}
}
function inOrder(root) {
	// body...
	if (root) {		
		inOrder(root.firstElementChild);
		render(root);
		inOrder(root.lastElementChild);
	}
}
function postOrder(root) {
	// body...
	if (root) {		
		postOrder(root.firstElementChild);
		postOrder(root.lastElementChild);
		render(root);
	}
}
document.getElementById('preorder').onclick = function() {
	// body...

	preOrder(root);
};   
document.getElementById('inorder').onclick = function () {
	// body...
	inOrder(root);
}
document.getElementById('postorder').onclick = function () {
	// body...
	postOrder(root);
}