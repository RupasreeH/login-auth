import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  route = inject(ActivatedRoute);
  category: string | null = '';
  constructor() {
    this.route.queryParamMap.subscribe((params) => {
      this.category = params.get('category');
    });
  }
}
