var imageList = [
'images/map-e1.jpg',
'images/map-e2.jpg',
'images/map-h1.jpg',
'images/map-h2.jpg',
'images/fin.JPG'
];


var curr = 0;

function main() {
	document.querySelectorAll('.img-size').forEach(function(e) {
		e.onclick=display.bind(this,e.value);
	});
	document.querySelector('#btn-prev').onclick = prev;
	document.querySelector('#btn-next').onclick = next;
	onkeydown = function(e) {
		if (e.keyCode == 32) {
			next();
		}
	};
}

function display(val) {
	document.querySelector('#form1').style.display = 'none';
	document.querySelector('#gallery').style.display = 'block';
	document.querySelector('#user').src = 'images/user' + val + '.jpeg';
}

function next() {
	if (curr == imageList.length - 1) {
		return false;
	}
	curr += 1;
	document.querySelector('#img-main').src = imageList[curr];
	if (curr == imageList.length - 1) {
		document.querySelector('#btn-next').disabled = true;
	}
	if (curr > 0) {
		document.querySelector('#btn-prev').disabled = false;
	}
}

function prev() {
	if (curr == 0) {
		return false;
	}
	curr -= 1;
	document.querySelector('#img-main').src = imageList[curr];
	if (curr < imageList.length - 1) {
		document.querySelector('#btn-next').disabled = false;
	}
	if (curr == 0) {
		document.querySelector('#btn-prev').disabled = true;
	}
}

addEventListener('load', main, false);
