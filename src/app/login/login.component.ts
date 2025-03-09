import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  router = inject(Router);
  users: any[] = [];
  username = '';
  password = '';
  userService = inject(UserService);
  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      validators: [Validators.required],
    }),
  });
  ngOnInit() {
    // this.userService.getAllUsers().subscribe(
    //   (data) => {
    //     console.log('Roopa', data);
    //     this.users = data;
    //   },
    //   (error) => {
    //     console.log('error', error);
    //   }
    // );
  }

  onSubmit() {
    let UserLogincheck = this.userService.LoginUser(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
    if (UserLogincheck == true) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/logout']);
    }
  }
}
