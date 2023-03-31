import { Component } from '@angular/core';
import {User} from '../user';
import { UserService } from '../user.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users?:User[];
  constructor(private userService: UserService){}

  ngOnInit() {
    //this.users = UserService.getAll();
    
    /*this.userService.getAll().subscribe(
      (users: User[]) => this.users = users
      );*/
      this.userService.getAll().pipe(first()).subscribe(users => {
        this.users = users;
    });
  }
}
