import { Component } from '@angular/core';
import { ThemeServiceService } from '../services/theme-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public themeSerivce: ThemeServiceService) {}

  home: string = 'Home';
  projects: string = 'My Projects';
  contact: string = 'Contact Me';
  aboutme: string = 'About Me';
  myblogs: string = 'My Blogs';
  onToggleTheme() {
    console.log('Toggle button clicked');

    this.themeSerivce.toggleTheme();
    this.themeSerivce.toggleTextColor();
  }

  public isDarkThemeEnabled(): boolean {
    return this.themeSerivce.isDarkThemeEnabled();
  }

  public isLightTextColorEnabled(): boolean {
    return this.themeSerivce.isLightTextColorEnabled();
  }

  

}
