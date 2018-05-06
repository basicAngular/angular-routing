import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  errorMsg = '';
  constructor(private _userService: UsersService) { }

  ngOnInit() {
    this._userService.getUser()
      .subscribe( data => this.users = data,
                error => this.errorMsg = error);
  }

}
