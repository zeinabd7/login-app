import { Component } from '@angular/core';
import {User} from './user';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';

  user?: User | null;

  constructor(private _authService: AuthService) {
      this._authService.user.subscribe(x => this.user = x);
  }
}
