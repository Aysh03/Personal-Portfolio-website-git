import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Injectable({
providedIn: 'root',
})
export class GalaxyService {

private scene!: THREE.Scene;
private camera!: THREE.PerspectiveCamera;
private renderer!: THREE.WebGLRenderer;
private stars!: THREE.Points;
private planets: THREE.Mesh[] = [];
private clock: THREE.Clock = new THREE.Clock();
private spaceship!: THREE.Mesh;

constructor() {}

public init(container: HTMLElement) {
this.scene = new THREE.Scene();
this.camera = new THREE.PerspectiveCamera(
75,
container.clientWidth / container.clientHeight,
0.1,
10000
);
this.camera.position.z = 1000;
this.renderer = new THREE.WebGLRenderer();
this.renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(this.renderer.domElement);



// Create a star texture
const starTexture = new THREE.TextureLoader().load(
  '../../assets/images/whiteStar.jpg'
);

// Create a star material with alpha map
const starMaterial = new THREE.PointsMaterial({
  map: starTexture,
  color: 0xffffff,
  blending: THREE.AdditiveBlending,
  transparent: true,
  size: 10,
  sizeAttenuation: true,
  alphaMap: new THREE.TextureLoader().load('../../assets/images/whiteStar.jpg'),
});

// Add stars to the scene
const starGeometry = new THREE.BufferGeometry();
const starPositions = [];
for (let i = 0; i < 10000; i++) {
  const x = THREE.MathUtils.randInt(-5000, 5000);
  const y = THREE.MathUtils.randInt(-5000, 5000);
  const z = THREE.MathUtils.randInt(-5000, -50000);
  starPositions.push(x, y, z);
}
starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
const stars = new THREE.Points(starGeometry, starMaterial);
this.scene.add(stars);

// Animate the stars
const animateStars = () => {
  requestAnimationFrame(animateStars);
  const time = Date.now() * 0.00005;
  starMaterial.size = 10 + 5 * Math.sin(time * 10);
  starMaterial.needsUpdate = true;
};
animateStars();

// Create planet texture
const planetTexture = new THREE.TextureLoader().load(
  '../../assets/images/planet.jpg'
);

// Create planet geometry and material
const planetGeometry = new THREE.SphereGeometry(100, 32, 32);
const planetMaterial1 = new THREE.MeshBasicMaterial({
  map: planetTexture,
  color: 0xdddddd,
});
const planetMaterial2 = new THREE.MeshBasicMaterial({
  map: planetTexture,
  color: 0xaaaaaa,
});
const planetMaterial3 = new THREE.MeshBasicMaterial({
  map: planetTexture,
  color: 0x777777,
});
const planetMaterials = [planetMaterial1, planetMaterial2, planetMaterial3];

// Add multiple planets to the scene
for (let i = 0; i < 100; i++) {
  const planet = new THREE.Mesh(
    planetGeometry,
    planetMaterials[Math.floor(Math.random() * planetMaterials.length)]
  );
  
      planet.position.set(
        THREE.MathUtils.randInt(-10000, 10000),
        THREE.MathUtils.randInt(-10000, 10000),
        THREE.MathUtils.randInt(-50000, -100000)
      );
      this.scene.add(planet);
      this.planets.push(planet);

}


// Add an event listener to handle window resizing
window.addEventListener('resize', () => {
  this.camera.aspect = container.clientWidth / container.clientHeight;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(container.clientWidth, container.clientHeight);
});



// Add an event listener to handle window resizing
window.addEventListener('resize', () => {
  this.camera.aspect = container.clientWidth / container.clientHeight;
  this.camera.updateProjectionMatrix();
  this.renderer.setSize(container.clientWidth, container.clientHeight);
});
}

public animate() {
requestAnimationFrame(() => this.animate());
const delta = this.clock.getDelta();




const speed = 500;
const moveDistance = speed * delta;
const keyStates = this.getKeyStates();
if (keyStates['KeyW']) {
  this.spaceship.translateZ(-moveDistance);
}
if (keyStates['KeyS']) {
  this.spaceship.translateZ(moveDistance);
}

// Rotate the spaceship based on mouse input
const rotationSpeed = 0.1;
const mouseState = this.getMouseState();
if (mouseState.leftButtonPressed) {
  this.spaceship.rotateY(
    -mouseState.movementX * rotationSpeed * delta
  );
  this.spaceship.rotateX(
    -mouseState.movementY * rotationSpeed * delta
  );
}

// Move the planets and wrap them around when they reach the edge of the screen
const planetSpeed = 50;
for (const planet of this.planets) {
  planet.position.z += planetSpeed * delta;
  if (planet.position.z > 0) {
    planet.position.z = THREE.MathUtils.randInt(-50000, -100000);
  }
}

// Render the scene
this.renderer.render(this.scene, this.camera);
}


private getKeyStates(): { [key: string]: boolean } {
  return {
  KeyW: false,
  KeyS: false,
  ...this.keyState,
  };
  }
  
  // private getMouseState(): {
  // leftButtonPressed: boolean;
  // movementX: number;
  // movementY: number;
  // }
  //  {
  // return {
  // leftButtonPressed= false,
  // movementX: 0,
  // movementY: 0,
  // ...this.mouseState,
  // };
  // }
  

  private getMouseState() {
    return {
      leftButtonPressed: false,
      movementX: this.mouseState.movementX,
      movementY: this.mouseState.movementY,
    };
  }
  



  private keyState: { [key: string]: boolean } = {};
  private mouseState = {
  leftButtonPressed: false,
  movementX: 0,
  movementY: 0,
  };
  
  public handleKeyDown(event: KeyboardEvent) {
  this.keyState[event.code] = true;
  }
  
  public handleKeyUp(event: KeyboardEvent) {
  this.keyState[event.code] = false;
  }
  
  public handleMouseDown(event: MouseEvent) {
  if (event.button === 0) {
  this.mouseState.leftButtonPressed = true;
  }
  }
  
  public handleMouseUp(event: MouseEvent) {
  if (event.button === 0) {
  this.mouseState.leftButtonPressed = false;
  }
  }
  
  public handleMouseMove(event: MouseEvent) {
  this.mouseState.movementX = event.movementX;
  this.mouseState.movementY = event.movementY;
  }


}
