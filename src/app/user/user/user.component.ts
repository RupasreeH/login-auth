import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { UserdetailsComponent } from '../userdetails/userdetails.component';

@Component({
  selector: 'app-user',
  imports: [RouterLink, RouterOutlet, UserdetailsComponent],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  routes = inject(Router);
  http = inject(HttpClient);
  routePara = inject(ActivatedRoute);
  users: any[] = [];
  user: any;
  username = '';
  selectedUserID: any;
  constructor() {
    this.routes.navigate(['/user']);
    this.http.get<any[]>('assets/data/user-data.json').subscribe((data) => {
      console.log('user data loaded', data);
      this.users = data;
    });
  }
  selectuser(userid: string) {
    this.selectedUserID = '';
    this.routePara.paramMap.subscribe((params) => {
      this.selectedUserID = params.get('id');
    });
    this.selectedUserID = userid;
    console.log('this.selectedUserID ', this.selectedUserID);
  }
}
