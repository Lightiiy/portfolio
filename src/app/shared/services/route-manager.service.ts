import { inject, Injectable } from '@angular/core';
import {
	APP_ROUTES,
	AppRoute,
	flatAppRoutes,
	RouteWithParent,
} from '../models/app-routing.model';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

@Injectable()
export class RouteManagerService {
	flattenedRoutes: RouteWithParent[] = flatAppRoutes();

	router = inject(Router);

	private currentPathLeaf$$: Observable<string | undefined> =
		this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((event: NavigationEnd) =>
				this.getCurrentPathLeaf(event.urlAfterRedirects)
			)
		);

	currentPathAppRoute$$: Observable<AppRoute> = this.currentPathLeaf$$.pipe(
		map((leaf: string | undefined) => this.getAppRouteForUrl(leaf))
	);

	backRoute$$: Observable<AppRoute> = this.currentPathLeaf$$.pipe(
		filter((leaf) => leaf !== undefined),
		map((leaf) => this.getBackRoutePath(leaf))
	);

	childNav$$: Observable<boolean> = this.currentPathLeaf$$.pipe(
		filter((leaf) => leaf !== undefined),
		map((leaf: string) => {
			const routeWithParent = this.flattenedRoutes.find(
				(route: RouteWithParent) => route.route.path === leaf
			);

			return routeWithParent?.parent !== undefined ||
				routeWithParent?.route.children !== undefined
				? true
				: false;
		})
	);

	getCurrentPathLeaf(url: string) {
		return url.split('/').pop()?.split('?').pop();
	}

	getAppRouteForUrl(url?: string): AppRoute {
		if (url === undefined) {
			return APP_ROUTES[0];
		}
		return (
			this.flattenedRoutes.find((route) => route.route.path === url)?.route ||
			APP_ROUTES[0]
		);
	}

	getBackRoutePath(url: string): AppRoute {
		const parsedRoute = this.flattenedRoutes.find(
			(route) => route.route.path === url
		);
		if (parsedRoute !== undefined) {
			return APP_ROUTES[0];
		}
		const parentRefrenceOfParent = this.flattenedRoutes.find(
			(routeWithParents) => routeWithParents.route === parsedRoute!.parent
		);
		if (parentRefrenceOfParent?.parent === undefined) {
			return APP_ROUTES[0];
		}
		return parentRefrenceOfParent.parent;
	}

	buildFullPath(routePath: string): string {
		const appRoute = this.flattenedRoutes.find(
			(routes) => routes.route.path == routePath
		);
		if (!appRoute) {
			console.warn('couldnt create the path');
			return '';
		}

		const pathSegements: string[] = [];

		let current: RouteWithParent | undefined = appRoute;

		while (current) {
			pathSegements.unshift(current.route.path);
			current = this.flattenedRoutes.find(
				(routes) => routes.route === current?.parent
			);
		}

		return '/' + pathSegements.join('/');
	}
}
