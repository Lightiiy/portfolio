import { Component, inject, Input, input } from '@angular/core';
import {
	APP_ROUTES,
	AppRoute,
	RouteWithParent,
} from '../../shared/models/app-routing.model';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
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

	routeManagerService = inject(RouteManagerService);

	childNav$$ = this.routeManagerService.childNav$$;

	backRoute$$ = this.routeManagerService.backRoute$$;

	currentAppRoute$$ = this.routeManagerService.currentPathAppRoute$$;

	childrenToDisplay$$ = this.currentAppRoute$$.pipe(
		map((appRoute) => {
			if (appRoute.children) {
				return appRoute.children;
			}
			const parent = this.routeManagerService.flattenedRoutes.find(
				(appRoutes) => appRoutes.route.path === appRoute.path
			)?.parent;
			if (
				parent &&
				parent.children?.find((child) => child.path == appRoute.path)
			) {
				return parent.children;
			}
			return [];
		})
	);

	pathToComponent(url: string): string {
		return this.routeManagerService.buildFullPath(url);
	}
}
