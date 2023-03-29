import { Component } from '@angular/core';
import * as THREE from 'three';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  textToType:string = "Hi, I'm a Fullstack Developer with expertise in Angular, Springboot. I'm passionate about developing scalable and efficient web applications that solve real-world problems. If you're looking for a reliable Full Stack Developer to build your next web application, feel free to get in touch with me."

  typedText:string = "";


  private renderer!: THREE.WebGLRenderer;
  private camera!: THREE.PerspectiveCamera;
  private scene!: THREE.Scene;
  private cube!: THREE.Mesh;




  ngOnInit() {
    this.typeText();


  }


    
  

  typeText() {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < this.textToType.length) {
        this.typedText += this.textToType.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
  }
  


}


