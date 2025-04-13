import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from './shared/services/translate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'port-root',
	templateUrl: './app.component.html',
	standalone: false,
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'portfolio';

	translateService = inject(TranslateService);

	ngOnInit(): void {
		this.translateService.setLanguage('en');
	}
}
