import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { userService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  angForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: userService,
    private fb: FormBuilder) {
      this.createForm();
     }

  createForm() {
    this.angForm = this.fb.group({
        first_name: ['', Validators.required ],
        last_name: ['', Validators.required ],
        email: ['', Validators.required ]
      });
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.bs.edituser(params['id']).subscribe(res => {
        this.user = res;
      });
    });
  }

  updateuser(first_name, last_name, email) {
   this.route.params.subscribe(params => {
      this.bs.updateuser(first_name, last_name, email, params['id']).subscribe(() => {
        this.router.navigate(['']);
      });
   });
}
}
