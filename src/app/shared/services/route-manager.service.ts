import { Injectable } from '@angular/core';
import {
	APP_ROUTES,
	AppRoute,
	flatAppRoutes,
	RouteWithParent,
} from '../models/app-routing.model';

@Injectable()
export class RouteManagerService {
	flattenedRoutes: RouteWithParent[] = flatAppRoutes();

	getCurrentPathLeaf(url: string) {
		return url.split('/').pop()?.split('?').pop();
	}

	getAppRouteForUrl(url: string): AppRoute | undefined {
		return this.flattenedRoutes.find((route) => route.route.path === url)
			?.route;
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
}
