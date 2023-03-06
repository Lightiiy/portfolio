import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './module/home-page/home-page.component';
import { AboutSectionComponent } from './module/about-section/about-section.component';
import { Routes, RouterModule, Router } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutSectionComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
