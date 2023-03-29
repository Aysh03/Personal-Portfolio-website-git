import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThemeServiceService } from './services/theme-service.service';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';
import { AppThemeDirective } from './app-theme.directive';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { GalaxyComponent } from './galaxy/galaxy.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { GalaxyService } from './services/galaxy.service';
import { RainEffectComponent } from './rain-effect/rain-effect.component';
import { IcosahedronComponent } from './icosahedron/icosahedron.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AppThemeDirective,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    GalaxyComponent,
    RainEffectComponent,
    IcosahedronComponent,
    MyBlogsComponent,
    ContactMeComponent,
    QuotesComponent,

     ],
  imports: [
    BrowserModule,
     NgChartsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTooltipModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
