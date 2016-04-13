

function init_lights(scene) {
	// var light;
	// light = new THREE.DirectionalLight(0xaaaaaa, 1);
	// light.position.set(1, 1, 500);
	// light.castShadow = true;
	// scene.add(light);

	var spotLight1 = new THREE.SpotLight( 0xffffff, 1, 500, Math.PI/2, 0.1, 0);
	spotLight1.position.set( 0, 0, 50 );
	spotLight1.castShadow = true;
	spotLight1.shadowCameraNear = 1;
	spotLight1.shadowCameraFar = 100;
	spotLight1.shadowCameraFov = 100;
	spotLight1.shadowMapWidth = 1024 * 3;
	spotLight1.shadowMapHeight = 1024 * 3;
	scene.add(spotLight1);

	// var spotLight2 = new THREE.SpotLight(0xffffff, 0.7, 500, Math.PI/2, 1);
	// spotLight2.position.set( 2, 0, 40 );
	// spotLight2.castShadow = true;
	// spotLight2.shadowCameraNear = 1;
	// spotLight2.shadowCameraFar = 50;
	// spotLight2.shadowCameraFov = 100;
	// spotLight2.shadowMapWidth = 1024;
	// spotLight2.shadowMapHeight = 1024;
	// // spotLight2.shadowCameraVisible = true;
	// scene.add(spotLight2);

	var light = new THREE.AmbientLight(0xaaaaaa); // soft white light
	scene.add( light );

}
