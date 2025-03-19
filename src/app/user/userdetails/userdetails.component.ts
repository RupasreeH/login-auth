import { HttpClient } from '@angular/common/http';
import {
  Component,
  Inject,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  FormArray,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './userdetails.component.html',
  styleUrl: './userdetails.component.css',
})
export class UserdetailsComponent implements OnChanges {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  // fb = inject(FormBuilder);
  userdata: any;
  userdata1: any;
  username: string | null = '';
  skillsForm!: FormGroup;
  //skills: any[] = [];
  @Input() userid = '';

  constructor() {
    this.skillsForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      skills: new FormArray([new FormControl('', Validators.required)]),
    });

    this.route.data.subscribe((data) => {
      this.userdata = data['userData'];
      console.log('Loaded from resolver', this.userdata);
    });

    this.route.queryParamMap.subscribe((params) => {
      this.username = params.get('username');
      console.log('Queryparma value', this.username);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userid'] && this.userid) {
      this.fetchUserDetails();
    }
  }
  fetchUserDetails() {
    if (this.userdata) {
      this.userdata1 = this.userdata.find((u: any) => u.userId == this.userid);
    }
  }
  get skills() {
    //get skills
    return this.skillsForm.get('skills') as FormArray;
  }
  addSkill() {
    //add skills
    this.skills.push(new FormControl('', Validators.required));
  }

  removeSkill(index: number) {
    if (this.skills.length > 1) {
      this.skills.removeAt(index);
    }
  }
  onSubmit() {
    console.log('skill form value', this.skillsForm.value);
  }
}
