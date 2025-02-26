import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true,
  })
  .catch((err) => console.error(err));

const backgroundDiv = document.querySelector('.portfolioBackground');

document.addEventListener('mousemove', (event) => {
  const follower = document.querySelector(
    '.portfolioBackground__fancyCursor',
  ) as HTMLElement;
  if (follower) {
    follower.style.left = `${event.pageX - 50}px`;
    follower.style.top = `${event.pageY - 50}px`;
  }
});
