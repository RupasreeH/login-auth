import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { canDeactivateGuard } from './can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [canDeactivateGuard],
    // canActivate: [AuthGuard],
  },

  {
    path: 'logout',
    component: LogoutComponent,
  },
];
