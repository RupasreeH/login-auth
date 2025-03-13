import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-userdetails',
  imports: [],
  standalone: true,
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css',
})
export class UserdetailsComponent implements OnChanges {
  http = inject(HttpClient);
  userdata: any;
  @Input() userid = '';
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userid'] && this.userid) {
      this.fetchUserDetails();
    }
  }
  fetchUserDetails() {
    console.log('input value', this.userid);
    this.http.get<any[]>('/assets/data/user-data.json').subscribe((data) => {
      this.userdata = data.find((u) => u.id === this.userid);
    });
  }
}
