import { Injectable } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';






@Injectable({
  providedIn: 'root',
})
export class GalaxyService {
 

  

//its very refine but approach is n0t met


// private scene: THREE.Scene;
// private camera: THREE.PerspectiveCamera;
// private renderer: THREE.WebGLRenderer;
// private planets: THREE.Mesh[];

// constructor() {
//   this.scene = new THREE.Scene();

//   this.camera = new THREE.PerspectiveCamera(
//     75, window.innerWidth / window.innerHeight, 0.1, 1000
//   );
//   this.camera.position.z = 50;

//   this.renderer = new THREE.WebGLRenderer();
//   this.renderer.setSize(window.innerWidth, window.innerHeight);

//   this.planets = [];
// }

// generateSolarSystem(): void {
//   // Create the sun
//   const sunGeometry = new THREE.SphereGeometry(10, 32, 32);
//   const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc00 });
//   const sun = new THREE.Mesh(sunGeometry, sunMaterial);
//   this.scene.add(sun);

//   // Create the planets
//   const planetsData = [
//     { radius: 5, distance: 15, speed: 0.02, color: 0x4f4fff },
//     { radius: 4, distance: 20, speed: 0.03, color: 0x00ccff },
//     { radius: 6, distance: 25, speed: 0.01, color: 0xffaa00 },
//   ];

//   planetsData.forEach(data => {
//     const planetGeometry = new THREE.SphereGeometry(data.radius, 32, 32);
//     const planetMaterial = new THREE.MeshBasicMaterial({ color: data.color });
//     const planet = new THREE.Mesh(planetGeometry, planetMaterial);
//     planet.position.set(data.distance, 0, 0);
//     this.planets.push(planet);
//     sun.add(planet);
//   });

//   // Create the stars
//   const starsGeometry = new THREE.BufferGeometry();
//   const positions = new Float32Array(10000 * 3);

//   for (let i = 0; i < 10000; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * 2000;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
//     positions[i * 3 + 2] = Math.random() * -1000;
//   }

//   starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//   const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
//   const stars = new THREE.Points(starsGeometry, starsMaterial);
//   this.scene.add(stars);

//   // Set up the animation loop
//   this.animate();
// }

// animate(): void {
//   requestAnimationFrame(() => this.animate());

//   // Rotate the planets
//   this.planets.forEach(planet => {
//     planet.rotation.y += 0.01;
//   });

//   // Render the scene
//   this.renderer.render(this.scene, this.camera);
// }






// private scene: THREE.Scene;
// private camera: THREE.PerspectiveCamera;
// private renderer: THREE.WebGLRenderer;
// private stars: THREE.Points;
// private planets: THREE.Mesh[];
// private sun: THREE.Mesh;

// constructor() {
//   // Create scene
//   this.scene = new THREE.Scene();

//   // Create camera
//   this.camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
//   );
//   this.camera.position.z = 200;

//   // Create renderer
//   this.renderer = new THREE.WebGLRenderer();
//   this.renderer.setSize(window.innerWidth, window.innerHeight);
//   document.body.appendChild(this.renderer.domElement);

//   // Create star field
//   const starGeometry = new THREE.BufferGeometry();
//   const starCount = 10000;
//   const positions = new Float32Array(starCount * 3);
//   for (let i = 0; i < starCount; i++) {
//     positions[i * 3] = (Math.random() - 0.5) * 2000;
//     positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
//     positions[i * 3 + 2] = Math.random() * 2000 - 1000;
//   }
//   starGeometry.setAttribute(
//     'position',
//     new THREE.BufferAttribute(positions, 3)
//   );
//   const starMaterial = new THREE.PointsMaterial({
//     color: 0xffffff
//   });
//   this.stars = new THREE.Points(starGeometry, starMaterial);
//   this.scene.add(this.stars);

//   // Create sun
//   const sunGeometry = new THREE.SphereGeometry(50, 32, 32);
//   const sunMaterial = new THREE.MeshBasicMaterial({
//     color: 0xffff00
//   });
//   this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
//   this.scene.add(this.sun);

//   // Create planets
//   const planetGeometry = new THREE.SphereGeometry(10, 32, 32);
//   const planetMaterials = [
//     new THREE.MeshBasicMaterial({ color: 0xff0000 }),
//     new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
//     new THREE.MeshBasicMaterial({ color: 0x0000ff })
//   ];
//   this.planets = [];
//   for (let i = 0; i < 3; i++) {
//     const planet = new THREE.Mesh(planetGeometry, planetMaterials[i]);
//     planet.position.x = (i - 1) * 100;
//     this.planets.push(planet);
//     this.scene.add(planet);
//   }
// }

// render() {
//   requestAnimationFrame(() => this.render());

//   // Animate planets
//   this.planets.forEach(planet => {
//     planet.position.x = Math.sin(Date.now() / 2000) * 50;
//     planet.position.y = Math.cos(Date.now() / 2000) * 50;
//   });

//   // Animate stars
//   this.stars.rotation.x += 0.001;
//   this.stars.rotation.y += 0.001;

//   // Render scene
//   this.renderer.render(this.scene, this.camera);
// }








// getBackground(): string {
//   // Render scene
//   this.render();

//   return `url(${this.renderer.domElement.toDataURL()})`;
// }





























//this is for astaunaut


private scene!: THREE.Scene;
private camera!: THREE.PerspectiveCamera;
private renderer!: THREE.WebGLRenderer;
private stars!: THREE.Points;
// private astronauts: THREE.Mesh[] = []; // change variable name from planets to astronauts
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

  const starMaterial = new THREE.PointsMaterial({
    map: starTexture,
    color: 0xffffff,
    blending: THREE.AdditiveBlending,
    transparent: true,
    size: 1000,
    sizeAttenuation: true,
    alphaMap: new THREE.TextureLoader().load(
      '../../assets/images/whiteStar.jpg'
    ),
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
  starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starPositions, 3)
  );
  const stars = new THREE.Points(starGeometry, starMaterial);
  this.scene.add(stars);

  // Animate the stars
  function animateStars() {
    requestAnimationFrame(animateStars);
    const time = Date.now() * 0.00005;
    starMaterial.size = 10 + 5 * Math.sin(time * 10);
    starMaterial.needsUpdate = true;
  }
  animateStars();

  // Cr


  // Create spaceship texture
  const spaceshipTexture = new THREE.TextureLoader().load(
    '../../assets/images/space ship.jpg'
    );


    const spaceshipGeometry = new THREE.BoxGeometry(200, 50, 50);
    const spaceshipMaterial = new THREE.MeshBasicMaterial({
      map: spaceshipTexture,
      color: 0xffffff,
    });
    
    // Add spaceship to the scene
    this.spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
    this.spaceship.position.set(0, 0, -500);
    this.scene.add(this.spaceship);
    
    // Add orbit controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.update();
    
    // Render the scene
    this.render();
    

  }





public render() {
requestAnimationFrame(() => this.render());



this.spaceship.position.z += 5;
if (this.spaceship.position.z > 0) {
  this.spaceship.position.z = -5000;
}

this.renderer.render(this.scene, this.camera);


}






}



