var imageList = [[
'images/map-e1.jpg',
'images/map-h1.jpg',
],
[
'images/map-e2.jpg',
'images/map-h2.jpg'
]];

var rand_facts = [ ['I love playing volleyball.', 'I am autistic.' ,'I have two siblings.'],
['I love playing volleyball.', 'I suck dick on sundays' ,'I have two siblings.']
];


var curr = 0,
	attempt = 0;


function main() {
	document.querySelectorAll('.img-size').forEach(function(e) {
		e.onclick=display.bind(this,e.value);
	});
	document.querySelector('#btn-prev').onclick = prev;
	document.querySelector('#btn-next').onclick = next;
	document.querySelector('#btn-again').onclick = again;
	onkeydown = function(e) {
		if (e.keyCode == 32) {
			next();
		}
	};
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function display(val) {
	document.querySelector('#heading-map').innerHTML = "MAP " + (curr+1);
	var rand_t = 5 + 5*Math.random();
	document.querySelector('#fin-img').style.display = 'none';
	document.querySelector('#form1').style.display = 'none';
	document.querySelector('#wait').style.display = 'block';
//	await sleep(rand_t*1000);
	document.querySelector('#wait').style.display = 'none';
	document.querySelector('#gallery').style.display = 'block';
	document.querySelector('#user').src = 'images/user' + val + '.jpeg';
	document.querySelector('#facts').replaceChildren();
	rand_facts[attempt].forEach(function(e) {
		var li = document.createElement('li');
		li.innerHTML = e;
		document.querySelector('#facts').appendChild(li);
		} );
}

function next() {
	if (curr == imageList[attempt].length - 1) {
		document.querySelector('#gallery').style.display = 'none';
		document.querySelector('#fin-img').style.display = 'block';
		
		if (attempt == 1) {
		document.querySelector('#btn-again').style.display = 'none';
		}
		return false;
	}
	curr += 1;
	document.querySelector('#heading-map').innerHTML = "MAP " + (curr+1);
	document.querySelector('#img-main').src = imageList[attempt][curr];
	if (curr == imageList[attempt].length - 1) {
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

function again() {
	attempt = 1;
	curr = 0;
	document.querySelector('#form1').style.display = 'block';
	document.querySelector('#gallery').style.display = 'none';
	document.querySelector('#img-main').src = 'images/map-e2.jpg';
	document.querySelector('#img-fin').src = 'images/spinner.gif';
	document.querySelector('#fin-img').style.display = 'none';
}
addEventListener('load', main, false);
