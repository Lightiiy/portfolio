import { Route } from '@angular/router';
import { AboutComponent } from '../../pages/about/about.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { WorkExperienceComponent } from '../../pages/work-experience/work-experience.component';

export const APP_ROUTES: Route[] = [
	{
		path: 'home',
		title: 'Home',
		component: HomePageComponent,
	},
	{
		path: 'about',
		title: 'About Me',
		component: AboutComponent,
		children: [
			{
				path: 'experience',
				title: 'Work experience',
				component: WorkExperienceComponent,
			},
			{
				path: 'education',
				title: 'Education',
				component: WorkExperienceComponent,
				children: [
					{
						path: 'test',
						title: 'TestComponent',
						component: WorkExperienceComponent,
					},
				],
			},
		],
	},
	{
		path: 'settings',
		title: 'Settings',
		component: HomePageComponent,
	},
	{
		path: '**',
		redirectTo: 'home',
		pathMatch: 'full',
	},
];

// export function flatAppRoutes(): RouteWithParent[] {
// 	let flattened: RouteWithParent[] = [];

// 	function recursiveFlatten(
// 		routes: AppRoute[],
// 		parent: AppRoute | undefined = undefined
// 	) {
// 		routes.forEach((route) => {
// 			flattened.push({ route, parent });

// 			if (route.children) {
// 				recursiveFlatten(route.children, route);
// 			}
// 		});
// 	}

// 	recursiveFlatten(APP_ROUTES);
// 	console.log([flattened]);
// 	return flattened;
// }
