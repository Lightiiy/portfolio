import {
	AfterViewInit,
	Component,
	inject,
	Input,
	input,
	OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { APP_ROUTES } from '../../shared/models/app-routing.model';

@Component({
	selector: 'port-navigation-menu',
	standalone: false,
	templateUrl: './navigation-menu.component.html',
	styleUrl: './navigation-menu.component.scss',
})
export class NavigationMenuComponent implements AfterViewInit {
	appRouteArray: Route[] = APP_ROUTES;

	activatedRoute = inject(ActivatedRoute);

	ngAfterViewInit(): void {
		console.log('ActivatedRoute:', this.activatedRoute);
	}
}
