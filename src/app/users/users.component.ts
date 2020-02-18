import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/services/user.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private service: UserService) { }

  ngOnInit() {

    this.service.getAll().subscribe(data => {
      this.users = data;
    });

  }

}
