import { Component, OnInit } from '@angular/core';
import User from '../user';
import { userService } from '../user.service';

@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  searchValue = '';
  users: User[];

  constructor(private bs: userService) { }

  ngOnInit() {
    this.refresh();
  }

  search(value) {
    this.searchValue = value;
    this.refresh();
  }
  
  refresh(){
    return this.bs
    .getusers(this.searchValue)
    .subscribe((data: User[]) => {
      this.users = data;
  });
  }

  deleteuser(id) {
    this.bs.deleteuser(id).subscribe(res => {
      console.log('Deleted');
      this.refresh();
    });
  }

}
