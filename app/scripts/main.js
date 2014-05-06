

var add_to_home = addToHomescreen({
	maxDisplayCount: 3,
	startDelay: 15,
	//debug: true,
	appID: 'puevfthanjneqran',
	mandatory: false
});

var	myScroll = new IScroll('#wrapper', {
	scrollX: true,
	scrollY: true,
	momentum: false,
	snap: true
});


document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);