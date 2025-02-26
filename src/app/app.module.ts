import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationModule } from './components/navigation/navigation.module';
import { BackgroundModule } from './components/background/background.module';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule,
    BackgroundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
