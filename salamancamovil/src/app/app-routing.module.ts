
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/app/categories', pathMatch: 'full' },
  { path: 'app', redirectTo: '/app/categories', pathMatch: 'full' },
  { path: 'app', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: '**', redirectTo: '/app' },
  //{ path: 'splashscreen', loadChildren: './splashscreen/splashscreen.module#SplashscreenPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
