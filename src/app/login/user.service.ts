import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http = inject(HttpClient);
  users: any[] = [];
  constructor() {
    this.getAllUsers();
  }
  getAllUsers(): void {
    this.http.get<any[]>('assets/data/user-data.json').subscribe(
      (data) => {
        console.log('Roopa', data);
        this.users = data;
      },
      (error) => {
        console.log('error', error);
      }
    );
  }
  LoginUser(username: any, password: any) {
    const ustempuserer = this.users.find(
      (u: any) => u.username === username && u.password === password
    );
    if (ustempuserer != undefined) {
      alert('user login done');
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    } else {
      return false;
    }
  }
}
