import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from '../services/theme-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // constructor( public themeSerivce:ThemeServiceService){}
  constructor(public themeService: ThemeServiceService) {}
  ngOnInit(){
   
  }

  onToggleTheme() {
    this.themeService.toggleTheme();
 
  }
}
