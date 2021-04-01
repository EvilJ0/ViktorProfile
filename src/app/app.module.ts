import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './view/layout/layout.component';
import { ProfileComponent } from './view/profile/profile.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';
import { InfoComponent }      from './components/profile/info/info.component';
import { EducationComponent } from './components/profile/education/education.component';
import { ExperienceComponent } from './components/profile/experience/experience.component';
import { SkillsComponent } from './components/profile/skills/skills.component';
import { TraitsComponent } from './components/profile/traits/traits.component';
import { I640Component } from './components/machines/i640/i640.component';
import { Gr540Component } from './components/machines/gr540/gr540.component';
import { X2000Component } from './components/machines/x2000/x2000.component';
import { JwComponent } from './components/machines/jw/jw.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ProfileComponent,
    PortfolioComponent,
    InfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    TraitsComponent,
    I640Component,
    Gr540Component,
    X2000Component,
    JwComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
