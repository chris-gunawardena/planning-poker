class Card{
	constructor(card_text) {
		// Init
		this.ratio = 16/9;
		this.width = 40;
		this.height = this.width * this.ratio;
		this.space = 5;
		this.card = new THREE.Object3D();
		this.selected  = false;

		// Card background
		this.bgMaterial = new THREE.MeshLambertMaterial({color : '#e44231'});
		this.bgGeometry = new THREE.BoxGeometry(this.width, this.height, 10);
		this.bgMesh = new THREE.Mesh(this.bgGeometry, this.bgMaterial);
		this.bgMesh.castShadow = true;
		this.bgMesh.receiveShadow = true;
		this.bgMesh.name = card_text;
		this.card.add(this.bgMesh);

		// Card text
		this.textGeometry = new THREE.TextGeometry(card_text, {
			size: this.width / 2,
			height: 1,
			font: 'helvetiker'
		});
		this.textGeometry.computeBoundingBox();
		this.center	= new THREE.Vector3();
		this.center.x	= (this.textGeometry.boundingBox.max.x - this.textGeometry.boundingBox.min.x) / 2
		this.center.y	= (this.textGeometry.boundingBox.max.y - this.textGeometry.boundingBox.min.y) / 2
		this.center.z	= -7 + (this.textGeometry.boundingBox.max.z - this.textGeometry.boundingBox.min.z) / 2
		this.textGeometry.vertices.forEach(function(vertex) {
			vertex.sub(this.center)
		}, this);
		this.textMaterial = new THREE.MeshLambertMaterial({color : '#fead13'});
		this.textMesh = new THREE.Mesh(this.textGeometry, this.textMaterial);
		this.textMesh.castShadow = true;
		this.textMesh.receiveShadow = true;

		this.textMesh.name = card_text;
		this.card.add(this.textMesh);
		//text.position.x = -0.5 * ( text3d.boundingBox.max.x - text3d.boundingBox.min.x );
	}

	position_card(i, rows, cols) {
		rows = rows || 3;
		cols = cols || 3;
		this.bgMesh.i = i;
		this.textMesh.i = i;

		this.card.position.x = (i%rows * (this.width + this.space)) - (this.width + this.space);
		this.card.position.y = (this.height + this.space) - (Math.floor(i/cols) * (this.height + this.space));
		this.initialPosition = this.card.position.clone();
	}

	toggle() {
		var self = this;
		this.selected = !this.selected;

		var tween = new TWEEN.Tween(this.card.position)
		.easing(TWEEN.Easing.Elastic.InOut)
		.to(this.selected ? { x: 0, y: 0, z: 80 } : this.initialPosition, 1000)
		.onUpdate(function() {
			self.card.position.x = this.x;
			self.card.position.y = this.y;
			self.card.position.z = this.z;
		})
		.start();

		if(this.selected) {
			// If another card is selected, close it
			if(this.parent.selected) {
				this.parent.selected.toggle();
			}
			// Set this as selected
			this.parent.selected = this;
		}else{
			// Un selecting
			this.parent.selected = null;
		}
	}

}

class Cards{
	constructor(scene, camera, renderer) {
		this.scene = scene;
		this.camera = camera;
		this.renderer = renderer;

		// Create cards
		this.cards_list = ['1', '2', '3', '5', '8', '13', '24', '?'];
		this.cards_array = [];
		this.cards = new THREE.Object3D();
		_.forEach(this.cards_list, function(card_text, i, array) {
			var card = new Card(card_text, i);
			card.position_card(i);
			card.parent = this;
			this.cards.add(card.card);
			this.cards_array[i] = card;
		}, this);
		this.scene.add(this.cards);

		// Create bg for cards
		this.init_scene_bg();

		// On click 
		this.raycaster = new THREE.Raycaster();
		window.addEventListener('mousedown', _.bind(this.mousedown, this), false);
	}

	mousedown(event) {
		event.preventDefault();
		var mouse = new THREE.Vector2();
		mouse.x = (event.clientX / this.renderer.domElement.clientWidth) * 2 - 1;
		mouse.y = -(event.clientY / this.renderer.domElement.clientHeight) * 2 + 1;
		this.raycaster.setFromCamera(mouse.clone(), this.camera);
		var intersects = this.raycaster.intersectObjects(this.cards.children, true);
		if (intersects.length > 0) {
			this.cards_array[intersects[0].object.i].toggle();
			//alert(intersects[0].object.i);
		}
	}

	init_scene_bg(){
		var geometry = new THREE.PlaneGeometry(500, 500);
		var material = new THREE.MeshPhongMaterial( { color: 0xcccccc } );
		var plane = new THREE.Mesh( geometry, material );
		plane.position.z = -20;
		plane.receiveShadow = true;
		scene.add(plane);
	}
}
