import { inject, Injectable } from '@angular/core';
import { TranslateService } from './translate.service';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AppInitializationService {
	private translateService = inject(TranslateService);

	loadTranslations(): Observable<boolean> {
		return this.translateService.loadTranslations().pipe(
			map(() => true),
			catchError((error) => {
				console.error('Error loading translations', error);
				return [false];
			})
		);
	}
}
