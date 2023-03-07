import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ThemeServiceService } from './services/theme-service.service';

@Directive({
  selector: '[appAppTheme]'
})
export class AppThemeDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private themeService: ThemeServiceService) { }

  ngOnInit(): void {
    if (this.themeService.isDarkThemeEnabled()) {
      this.renderer.addClass(this.elementRef.nativeElement, 'dark-theme');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'dark-theme');
    }

    if (this.themeService.isLightTextColorEnabled()) {
      this.renderer.addClass(this.elementRef.nativeElement, 'light-text-color');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'light-text-color');
    }
  }



}
