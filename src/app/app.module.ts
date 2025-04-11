import { inject, NgModule, provideAppInitializer } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundModule } from './components/background/background.module';
import { PagesModule } from './pages/pages.module';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DisplayBannerComponent } from './components/display-banner/display-banner.component';
import { provideHttpClient } from '@angular/common/http';
import { NextButtonDirective } from './components/display-banner/next-button/next-button.directive';
import { AppInitializationService } from './shared/services/app-initialization.service';

@NgModule({
	declarations: [
		AppComponent,
		NavigationMenuComponent,
		DisplayBannerComponent,
		NextButtonDirective,
	],
	imports: [BrowserModule, AppRoutingModule, BackgroundModule, PagesModule],
	providers: [
		provideHttpClient(),
		provideAppInitializer(() => {
			return inject(AppInitializationService).loadTranslations();
		}),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
