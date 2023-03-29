














































































































































// import { Injectable } from '@angular/core';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// @Injectable({
//   providedIn: 'root',
// })
// export class GalaxyService {
// /// stars are working awesome

//   private scene!: THREE.Scene;
//   private camera!: THREE.PerspectiveCamera;
//   private renderer!: THREE.WebGLRenderer;
//   private stars!: THREE.Points;
//   private planets: THREE.Mesh[] = [];
//   private clock: THREE.Clock = new THREE.Clock();
//   private spaceship!: THREE.Mesh;

//   constructor() {}

//   public init(container: HTMLElement) {
//     this.scene = new THREE.Scene();
//     this.camera = new THREE.PerspectiveCamera(
//       75,
//       container.clientWidth / container.clientHeight,
//       0.1,
//       10000
//     );
//     this.camera.position.z = 1000;
//     this.renderer = new THREE.WebGLRenderer();
//     this.renderer.setSize(container.clientWidth, container.clientHeight);
//     container.appendChild(this.renderer.domElement);

//     // Create a star texture
//     const starTexture = new THREE.TextureLoader().load(
//       '../../assets/images/whiteStar.jpg'
//     );

//     // Create a star material
//     const starMaterial = new THREE.PointsMaterial({
//       map: starTexture,
//       color: 0xffffff,
//       blending: THREE.AdditiveBlending,
//       fog: true,
//       size: 10,
//       sizeAttenuation: true
//     });

//     // Add stars to the scene
//     const starGeometry = new THREE.BufferGeometry();
//     const starPositions = [];
//     for (let i = 0; i < 10000; i++) {
//       const x = THREE.MathUtils.randInt(-5000, 5000);
//       const y = THREE.MathUtils.randInt(-5000, 5000);
//       const z = THREE.MathUtils.randInt(-5000, -50000);
//       starPositions.push(x, y, z);
//     }
//     starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
//     this.stars = new THREE.Points(starGeometry, starMaterial);
//     this.scene.add(this.stars);

//     // Create planet texture
//     const planetTexture = new THREE.TextureLoader().load(
//       '../../assets/images/planet.jpg'
//     );

//     // Create planet geometry and material
//     const planetGeometry = new THREE.SphereGeometry(100, 32, 32);
//     const planetMaterial1 = new THREE.MeshBasicMaterial({
//       map: planetTexture,
//       color: 0xdddddd,
//     });
//     const planetMaterial2 = new THREE.MeshBasicMaterial({
//       map: planetTexture,
//       color: 0xaaaaaa,
//     });
//     const planetMaterial3 = new THREE.MeshBasicMaterial({
//       map: planetTexture,
//       color: 0x777777,
//     });
//     const planetMaterials = [planetMaterial1, planetMaterial2, planetMaterial3];

//     // Add multiple planets to the scene
//     for (let i = 0; i < 100; i++) {
//       const planet = new THREE.Mesh(
//         planetGeometry,
//         planetMaterials[Math.floor(Math.random() * planetMaterials.length)]
//       );
//       planet.position.set(
//         THREE.MathUtils.randInt(-10000, 10000),
//         THREE.MathUtils.randInt(-10000, 10000),
//         THREE.MathUtils.randInt(-50000, -100000)
//       );
//       this.scene.add(planet);
//       this.planets.push(planet);
//     }

//     // Create spaceship texture
//     const spaceshipTexture = new THREE.TextureLoader().load(
//       '../../assets/images/space ship.png'
//     );



//     const spaceshipGeometry = new THREE.BoxGeometry(50, 50, 50);
//     const spaceshipMaterial = new THREE.MeshBasicMaterial({
//     map: spaceshipTexture,
//     color: 0xffffff,
//     });




//     this.spaceship = new THREE.Mesh(spaceshipGeometry, spaceshipMaterial);
//     this.spaceship.position.set(0, 0, 500);
//     this.scene.add(this.spaceship);
    
//     // Add controls to the scene
//     const controls = new OrbitControls(this.camera, this.renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.05;
    
//     // Start animation loop
//     this.animate();


//   }

//     private animate() {
//       requestAnimationFrame(() => this.animate());
      
     
//       // Move the spaceship
//       const elapsedTime = this.clock.getElapsedTime();
//       const radius = 1000;
//       const angle = elapsedTime * 0.5;
//       this.spaceship.position.x = Math.cos(angle) * radius;
//       this.spaceship.position.z = Math.sin(angle) * radius + 500;
      
//       // Rotate the planets
//       this.planets.forEach((planet) => {
//         planet.rotation.y += 0.01;
//         planet.rotation.z += 0.01;
//       });
      
//       // Render the scene
//       this.renderer.render(this.scene, this.camera);
//       }










//     }













