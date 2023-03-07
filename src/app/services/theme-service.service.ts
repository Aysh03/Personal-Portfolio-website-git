import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';


const THEME_KEY = 'theme';
const TEXT_COLOR_KEY = 'textColor';


@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  private isDarkTheme = false;
  private isLightTextColor = false;

  constructor() {
    // Read theme and text color from local storage
    const savedTheme = localStorage.getItem(THEME_KEY);
    const savedTextColor = localStorage.getItem(TEXT_COLOR_KEY);

    // If values are found, set the flags accordingly
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
    }

    if (savedTextColor) {
      this.isLightTextColor = savedTextColor === 'light';
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem(THEME_KEY, this.isDarkTheme ? 'dark' : 'light');
  }

  toggleTextColor() {
    this.isLightTextColor = !this.isLightTextColor;
    localStorage.setItem(TEXT_COLOR_KEY, this.isLightTextColor ? 'light' : 'dark');
  }

  isDarkThemeEnabled() {
    return this.isDarkTheme;
  }

  isLightTextColorEnabled() {
    return this.isLightTextColor;
  } 
 
 









}


















// private renderer: Renderer2;
// public colorTheme: string;
// public textColor: string;

// constructor(rendererFactory: RendererFactory2) {
//   this.renderer = rendererFactory.createRenderer(null, null);
//   this.colorTheme = localStorage.getItem('color-theme') || 'light';
//   this.textColor = localStorage.getItem('text-color') || 'black';
// }

// initTheme() {
//   this.renderer.addClass(document.body, this.colorTheme);
//   this.renderer.addClass(document.body, this.textColor);
// }

// toggleTheme() {
//   if (this.colorTheme === 'light') {
//     this.renderer.removeClass(document.body, 'light');
//     this.renderer.addClass(document.body, 'dark');
//     this.colorTheme = 'dark';
//   } else {
//     this.renderer.removeClass(document.body, 'dark');
//     this.renderer.addClass(document.body, 'light');
//     this.colorTheme = 'light';
//   }
//   localStorage.setItem('color-theme', this.colorTheme);
// }

// toggleTextColor() {
//   if (this.textColor === 'black') {
//     this.renderer.removeClass(document.body, 'black');
//     this.renderer.addClass(document.body, 'white');
//     this.textColor = 'white';
//   } else {
//     this.renderer.removeClass(document.body, 'white');
//     this.renderer.addClass(document.body, 'black');
//     this.textColor = 'black';
//   }
//   localStorage.setItem('text-color', this.textColor);
// }


// get themeClasses() {
//   return {
//     [this.colorTheme]: true,
//     [this.textColor]: true,
//   };
// }
