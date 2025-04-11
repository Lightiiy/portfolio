import { DOCUMENT } from '@angular/common';
import { computed, Inject, inject, Injectable } from '@angular/core';
import { WINDOW } from '../injectors/window.injector';

@Injectable()
export class ScreenWidthService {
  private windowRef = inject(WINDOW);

  public currentScreenWidth = computed(() => {
    return 10;
  });
}
