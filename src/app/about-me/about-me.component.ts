import { Component } from '@angular/core';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

  textToType:string = "Hi, I'm a Fullstack Developer with expertise in Angular, Springboot, JavaScript, TypeScript, and Java. I'm passionate about developing scalable and efficient web applications that solve real-world problems. My experience includes designing and developing RESTful APIs using Springboot, creating responsive and dynamic user interfaces with Angular, and implementing complex business logic using Java and TypeScript. I have a keen eye for detail and always strive for pixel-perfect design implementation. I'm a quick learner and constantly keep myself updated with the latest web development trends and best practices. If you're looking for a reliable Full Stack Developer to build your next web application, feel free to get in touch with me. Let's collaborate to bring your ideas to life!";
  typedText:string = "";


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
