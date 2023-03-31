import { Component } from '@angular/core';
import {User} from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users?:User[];
  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.getAll().subscribe(
      (users: User[]) => this.users = users
      );
      
  }
}
