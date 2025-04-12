import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, tap } from 'rxjs';

@Injectable()
export class TranslateService {
	private static I18N_PATH = './assets/i18n/';

	private currentLanguage = new BehaviorSubject<string>('en');

	private translations: any = {};

	private http: HttpClient = inject(HttpClient);

	loadTranslations(lang = this.currentLanguage.getValue()) {
		return this.http.get(`${TranslateService.I18N_PATH + lang}.json`).pipe(
			map((translations) => (this.translations = translations)),
			catchError((error) => {
				console.error('Error loading transaltions: ', error);
				return [false];
			})
		);
	}

	translate(wholeKey: string): string {
		const keyArray = wholeKey.split('.');
		let result = this.translations;
		for (const key of keyArray) {
			if (typeof this.translations[key] !== 'object' && !result) {
				return wholeKey;
			}
			result = result[key];
		}

		return result || wholeKey;
	}

	setLanguage(lang: string) {
		this.currentLanguage.next(lang);
		this.loadTranslations(lang);
	}

	getCurrentLanguage() {
		return this.currentLanguage.asObservable();
	}
}
