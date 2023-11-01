var imageList = [
'images/story1.JPG',
'images/story1-0.JPG',
'images/story1-1.JPG',
'images/story1-2.JPG',
'images/story1-3.JPG',
'images/story1-0.JPG',
'images/story2.JPG',
'images/story2-0.JPG',
'images/story2-1.JPG',
'images/story2-2.JPG',
'images/story2-3.JPG',
'images/story2-0.JPG',
'images/story3.JPG',
'images/story3-0.JPG',
'images/story3-1.JPG',
'images/story3-2.JPG',
'images/story3-3.JPG',
'images/story3-0.JPG',
'images/story4.JPG',
'images/story4-0.JPG',
'images/story4-1.JPG',
'images/story4-2.JPG',
'images/story4-3.JPG',
'images/story4-0.JPG',
'images/fin.JPG'
];


var curr = 0;

function main() {
	document.querySelectorAll('.btn-gallery').forEach(function(e) {
		e.onclick=display;
	});
	document.querySelector('#btn-prev').onclick = prev;
	document.querySelector('#btn-next').onclick = next;
	onkeydown = function(e) {
		if (e.keyCode == 32) {
			next();
		}
	};
}

function display() {
	document.querySelector('#form1').style.display = 'none';
	document.querySelector('#gallery').style.display = 'block';
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
