import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  errorMsg = '';
  public userId;
  constructor(private _userService: UsersService , private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._userService.getUser()
      .subscribe( data => this.users = data,
                error => this.errorMsg = error);
  }

  onSelect(user) {
    this.router.navigate(['/user-information', user.id]);

}

}
