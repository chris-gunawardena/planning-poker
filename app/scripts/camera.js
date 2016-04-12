function init_camera(){
	var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 1000);
	camera.position.z = 60;
	camera.position.x = 0;
	camera.position.y = 0;
	camera.lookAt(scene.position);	

	return camera;
}