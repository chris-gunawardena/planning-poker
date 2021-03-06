var scene = new THREE.Scene();
var camera = init_camera();
var renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight+1);
renderer.shadowMap.enabled = true;
renderer.shadowMapSoft = true;

document.body.appendChild(renderer.domElement);

//var controls = new THREE.DeviceOrientationControls( camera, renderer.domElement );
var controls = new THREE.OrbitControls( camera, renderer.domElement );
//controls.addEventListener( 'change', render ); // add this only if there is no animation loop (requestAnimationFrame)
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = false;


// Lights
init_lights(scene);

// Create cards
var cards = new Cards(scene, camera, renderer);


//var colors = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];

function render(time) {

	setTimeout(function() {
		requestAnimationFrame(render);
	}, 1000 / 10);

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