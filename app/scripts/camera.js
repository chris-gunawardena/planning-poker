function init_camera(){
	var camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, .1, 1000);
	camera.position.z = 150;
	camera.position.x = 0;
	camera.position.y = 0;
	camera.lookAt(scene.position);	

	return camera;
}