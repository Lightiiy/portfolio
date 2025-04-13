import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES, AppRoute } from './shared/models/app-routing.model';

function flattenRoutes(routes: AppRoute[]): Routes {
	const result: Routes = [];
	for (const route of routes) {
		const { path, component, children } = route;

		result.push({
			path,
			component,
			children: children ? flattenRoutes(children) : undefined,
		});
	}

	return result;
}

@NgModule({
	imports: [RouterModule.forRoot(flattenRoutes(APP_ROUTES))],
	exports: [RouterModule],
})
export class AppRoutingModule {}
