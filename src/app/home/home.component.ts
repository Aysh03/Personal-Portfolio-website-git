
import { Component,ElementRef,OnInit, Renderer2 } from '@angular/core';
import { GalaxyService } from '../services/galaxy.service';
import { ThemeServiceService } from '../services/theme-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  background: string='';


  constructor( private galaxyService: GalaxyService, private elRef: ElementRef,private render:Renderer2){}


  texts = ['Full Stack Developer', 'Web Designer', 'Tech Enthusiast'];
textToShow = '';
currentIndex = 0;
typingInterval: any;
deletingInterval: any;

ngOnInit() {

  // const container = this.render.selectRootElement('#container');

  // const container = this.elRef.nativeElement.querySelector('#container');
  // this.galaxyService.init(container);
  // // this.background = this.galaxyService.getBackground();


  this.startTypingAnimation();
}

ngOnDestroy() {
  clearInterval(this.typingInterval);
  clearInterval(this.deletingInterval);
}

private startTypingAnimation() {
  const currentText = this.texts[this.currentIndex];
  const textLength = currentText.length;

  this.typingInterval = setInterval(() => {
    this.textToShow = currentText.substr(0, this.textToShow.length + 1);
    if (this.textToShow === currentText) {
      clearInterval(this.typingInterval);
      this.deletingInterval = setInterval(() => {
        this.textToShow = this.textToShow.substr(0, this.textToShow.length - 1);
        if (this.textToShow === '') {
          clearInterval(this.deletingInterval);
          this.currentIndex = (this.currentIndex + 1) % this.texts.length;
          this.startTypingAnimation();
        }
      }, 150);
    }
  }, 300);
}





















isChatbotVisible: boolean = false;

toggleChatbotVisibility() {
  this.isChatbotVisible = !this.isChatbotVisible;
}






}

