import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent }, // /home route
  { path: 'about', component: AboutComponent }, // /home route
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root to /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
