

function init_lights(scene) {

	var spotLight1 = new THREE.SpotLight( 0xffffff, 1, 500, Math.PI/2, 0.1, 0);
	spotLight1.position.set( 0, 0, 50 );
	spotLight1.castShadow = true;
	spotLight1.shadowCameraNear = 1;
	spotLight1.shadowCameraFar = 100;
	spotLight1.shadowCameraFov = 100;
	spotLight1.shadowMapWidth = 1024 * 3;
	spotLight1.shadowMapHeight = 1024 * 3;
	scene.add(spotLight1);

	var light = new THREE.AmbientLight(0xaaaaaa);
	scene.add( light );

}
