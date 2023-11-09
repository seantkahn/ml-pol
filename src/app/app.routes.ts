import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  // {
  //   path: 'glasses',
  //   loadComponent: () => import('./glasses/glasses.page').then( m => m.GlassesPage)
  // },
  // {
  //   path: 'page1',
  //   loadComponent: () => import('./page1/page1.page').then( m => m.Page1Page)
  // },
];
