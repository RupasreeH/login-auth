import { Component, HostListener, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CanComponentDeactivate } from '../can-component-deactivate';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements CanComponentDeactivate {
  routes = inject(Router);
  saved: boolean = false;
  EducationForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required],
    }),
    university: new FormControl('', {
      validators: [Validators.required],
    }),
  });

  canDeactivate(): boolean {
    if (!this.saved) {
      return confirm('Are you sure you want to leave the page?');
    } else {
      return true;
    }
  }
  onsubmit() {
    //if (this.EducationForm.valid) {
    this.saved = true;
    console.log(
      'form data',
      this.EducationForm.value.email,
      this.EducationForm.value.university
    );
    this.routes.navigate(['/logout']);
    //}
  }
  @HostListener('window:beforeunload', ['$event'])
  handleBrowserRefresh(event: Event) {
    event.preventDefault();
    return (event.returnValue = false);
  }
}
