import { HttpClient } from '@angular/common/http';
import {
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [],
  standalone: true,
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css',
})
export class UserdetailsComponent implements OnChanges {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  userdata: any;
  userdata1: any;
  @Input() userid = '';
  constructor() {
    this.route.data.subscribe((data) => {
      this.userdata = data['userData'];
      console.log('Loaded from resolver', this.userdata);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userid'] && this.userid) {
      this.fetchUserDetails();
    }
  }
  fetchUserDetails() {
    console.log('found user..........', this.userid);
    console.log('data in fetch', this.userdata);
    if (this.userdata) {
      this.userdata1 = this.userdata.find((u: any) => u.userId == this.userid);
    }
    console.log('data in fetch111', this.userdata1);
  }
}
