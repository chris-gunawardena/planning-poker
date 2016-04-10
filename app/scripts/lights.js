

function init_lights(scene) {
	var light;
	light = new THREE.DirectionalLight(0xaaaaaa, 1);
	light.position.set(1, 1, 500);
	light.castShadow = true;
	scene.add(light);

	var spotLight1 = new THREE.SpotLight( 0xffffff, 1.2, 500, 180);
	spotLight1.position.set( 200, 200, 200 );
	spotLight1.castShadow = true;
	spotLight1.shadowCameraNear = 1;
	spotLight1.shadowCameraFov = 90;
	spotLight1.shadowMapWidth = 2048;
	spotLight1.shadowMapHeight = 2048;
	scene.add(spotLight1);

	var spotLight2 = new THREE.SpotLight( 0xffffff, 1.2, 500, 180);
	spotLight2.position.set( -200, 200, 200 );
	spotLight2.castShadow = true;
	spotLight2.shadowCameraNear = 1;
	spotLight2.shadowCameraFov = 90;
	spotLight2.shadowMapWidth = 2048;
	spotLight2.shadowMapHeight = 2048;
	scene.add(spotLight2);

	var light = new THREE.AmbientLight( 0xcccccc ); // soft white light
	scene.add( light );


}
