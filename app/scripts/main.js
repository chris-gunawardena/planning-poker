var scene = new THREE.Scene();
var camera = init_camera();
var renderer = new THREE.WebGLRenderer({
	clearAlpha: 1,
	clearColor: 0xdddddd,
	antialias: true
 });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMapSoft = true;

document.body.appendChild(renderer.domElement);

// Touch controls
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.9;
controls.enableZoom = false;
controls.minPolarAngle = Math.PI*2/8;
controls.maxPolarAngle = Math.PI*6/8;
controls.minAzimuthAngle = -Math.PI*2/8;
controls.maxAzimuthAngle = Math.PI*2/8;
var re_center = function() {
	var tweenPositionToReset = new TWEEN.Tween( controls.object.position )
    .to( { x: controls.position0.x, y: controls.position0.y, z: controls.position0.z }, 300 )
    .easing( TWEEN.Easing.Quadratic.In )
    .start();
};
window.addEventListener('mouseup', re_center, false);
window.addEventListener('touchend', re_center, false);

// Lights
init_lights(scene);

// Create cards
var cards = new Cards(scene, camera, renderer);

function render(time) {

	setTimeout(function() {
		requestAnimationFrame(render);
	}, 1000 / 60);

	TWEEN.update(time);
	controls.update();
	renderer.render(scene, camera);
}
requestAnimationFrame(render);


// On resize
window.addEventListener('resize', function(e) {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
}, false);

window.addEventListener("load",function() {
	// Set a timeout...
	setTimeout(function(){
		// Hide the address bar!
		window.scrollTo(0, 1);
	}, 100);
});