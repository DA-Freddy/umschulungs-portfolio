import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Imprint } from './imprint/imprint';
import { Details } from './details/details';

export const routes: Routes = [
    {
    path: '',
    component: LandingPage,
  },
  {
    path: 'imprint',
    component: Imprint,
  },
  {
    path: 'details/:id',
    component: Details,
  },
];
