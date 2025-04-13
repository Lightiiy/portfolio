import { Component, inject } from '@angular/core';
import {
	APP_ROUTES,
	AppRoute,
	RouteWithParent,
} from '../../shared/models/app-routing.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RouteManagerService } from '../../shared/services/route-manager.service';

@Component({
	selector: 'port-navigation-menu',
	standalone: false,
	templateUrl: './navigation-menu.component.html',
	styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent {
	appRouteArray: AppRoute[] = APP_ROUTES;

	router = inject(Router);

	routeManagerService = inject(RouteManagerService);

	private currentPathLeaf$$: Observable<string | undefined> =
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((event: NavigationEnd) =>
				this.routeManagerService.getCurrentPathLeaf(event.urlAfterRedirects)
			)
		);

	backRoute$$: Observable<AppRoute> = this.currentPathLeaf$$.pipe(
		filter((leaf) => leaf !== undefined),
		map((leaf) => this.routeManagerService.getBackRoutePath(leaf))
	);

	childNav$$: Observable<boolean> = this.currentPathLeaf$$.pipe(
		filter((leaf) => leaf !== undefined),
		map((leaf: string) => {
			const routeWithParent = this.routeManagerService.flattenedRoutes.find(
				(route: RouteWithParent) => route.route.path === leaf
			);

			return routeWithParent?.parent !== undefined ||
				routeWithParent?.route.children !== undefined
				? true
				: false;
		})
	);
}
