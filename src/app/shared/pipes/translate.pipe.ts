import { inject, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false,
  standalone: false,
})
export class TranslatePipe implements PipeTransform {
  private translateService = inject(TranslateService);

  transform(value: any) {
    return this.translateService.translate(value);
  }
}
