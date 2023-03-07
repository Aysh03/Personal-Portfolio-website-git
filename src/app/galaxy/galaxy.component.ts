import { Component ,ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



@Component({
  selector: 'app-galaxy',
 
  templateUrl: './galaxy.component.html',
  styleUrls: ['./galaxy.component.css']
})
export class GalaxyComponent  implements OnInit{



  constructor() {}

  // ngOnInit(): void {
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
  //   document.querySelector('.galaxy-container').appendChild(this.renderer.domElement);

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
  //     color: 0xffffff,
  //   });
  //   this.stars = new THREE.Points(starGeometry, starMaterial);
  //   this.scene.add(this.stars);

  //   // Create sun
  //   const sunGeometry = new THREE.SphereGeometry(50, 32, 32);
  //   const sunMaterial = new THREE.MeshBasicMaterial({
  //     color: 0xffff00,
  //   });
  //   this.sun = new THREE.Mesh(sunGeometry, sunMaterial);
  //   this.scene.add(this.sun);

  //   // Create planets
  //   const planetGeometry = new THREE.SphereGeometry(10, 32, 32);
  //   const planetMaterials = [
  //     new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  //     new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
  //     new THREE.MeshBasicMaterial({ color: 0x0000ff }),
  //   ];
  //   this.planets = [];
  //   for (let i = 0; i < 3; i++) {
  //     const planet = new THREE.Mesh(planetGeometry, planetMaterials[i]);
  //     planet.position.x = (i - 1) * 100;
  //     this.planets.push(planet);
  //     this.scene.add(planet);
  //   }

  //   // Create orbit controls
  //   const controls = new OrbitControls(this.camera, this.renderer.domElement);


  //   this.background = `linear-gradient(180deg, #000000, #000000 75%, #080808)`;

  //   // Render scene
  //   this.render();

  // }


  ngOnInit(): void {
  }


}

