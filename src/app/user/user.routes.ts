import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { userResolver } from '../user.resolver';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: ':id',
        component: UserdetailsComponent,
        resolve: { userData: userResolver },
      },
    ],
  },
];
