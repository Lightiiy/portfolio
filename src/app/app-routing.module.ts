import { NgModule } from '@angular/core';
import {
	provideRouter,
	RouterModule,
	Routes,
	withDebugTracing,
} from '@angular/router';
import { APP_ROUTES } from './shared/models/app-routing.model';

@NgModule({
	imports: [RouterModule.forRoot(APP_ROUTES)],
	providers: [provideRouter(APP_ROUTES, withDebugTracing())],
	exports: [RouterModule],
})
export class AppRoutingModule {
	constructor() {
		console.log(APP_ROUTES);
	}
}
