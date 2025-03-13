import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { canDeactivateGuard } from './can-deactivate.guard';
import { UserComponent } from './user/user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingComponent } from './user/setting/setting.component';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
// import { UserdetailsComponent } from './user/userdetails/userdetails.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canDeactivate: [canDeactivateGuard],
  //   // canActivate: [AuthGuard],
  // },
  // {
  //   path: 'logout',
  //   component: LogoutComponent,
  // },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   children: [
  //     {
  //       path: ':id',
  //       component: UserdetailsComponent,
  //     },
  //   ],
  // },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // {
  //   path: 'home',
  //   loadComponent: () =>
  //     import('./home/home.component').then((m) => m.HomeComponent),
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.routes').then((m) => m.routes),
  // },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.routes').then((m) => m.routes),
  },
];
