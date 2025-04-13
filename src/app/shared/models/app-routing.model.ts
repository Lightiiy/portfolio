import { AboutComponent } from '../../pages/about/about.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';

export interface AppRoute {
	path: string;
	label: string;
	component?: any;
	children?: AppRoute[];
	hideFromNav?: boolean;
}

export interface RouteWithParent {
	route: AppRoute;
	parent?: AppRoute;
}

export const APP_ROUTES: AppRoute[] = [
	{
		path: 'home',
		label: 'Home Page',
		component: HomePageComponent,
	},
	{
		path: 'about',
		label: 'AboutPage',
		component: AboutComponent,
		children: [
			{
				path: 'experience',
				label: 'Work experience',
				component: HomePageComponent,
			},
			{
				path: 'education',
				label: 'Education',
				component: HomePageComponent,
				children: [
					{
						path: 'test',
						label: 'TestComponent',
						component: HomePageComponent,
					},
				],
			},
		],
	},
	{
		path: 'settings',
		label: 'Settings',
		component: HomePageComponent,
	},
	{
		path: '**',
		label: 'I got lost',
		hideFromNav: true,
		component: HomePageComponent,
	},
];

export function flatAppRoutes(): RouteWithParent[] {
	let flattened: RouteWithParent[] = [];

	function recursiveFlatten(
		routes: AppRoute[],
		parent: AppRoute | undefined = undefined
	) {
		routes.forEach((route) => {
			flattened.push({ route, parent });

			if (route.children) {
				recursiveFlatten(route.children, route);
			}
		});
	}

	recursiveFlatten(APP_ROUTES);

	return flattened;
}
