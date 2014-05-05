

var	myScroll = new IScroll('#wrapper', {
	scrollX: true,
	scrollY: true,
	momentum: true,
	snap: true
});


document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);