import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,){
    this.form = this.fb.group({
      login: '',
      password: '',
    });
    if (this._authService.userValue) { 
      this.router.navigate(['home']);
  }
  }
  ngOnInit() {
    this.form = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
    });
}
 

  submit() {
    const val = this.form.value;

    if (val.login && val.password) {
        this._authService.login(val.login, val.password)
            /*.subscribe(
                () => {
                  this.router.navigate(['/home']);
                    console.log('login success');
                   
                    
                }
            );*/
            .subscribe({
              next: () => {
                  this.router.navigate(['/home']);
                  console.log('login success');
              },
              error: error => {
                  console.log('login error', error);
              }
          });
    }
}

}

