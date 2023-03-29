import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private fb: FormBuilder,private _authService: AuthService){
    this.form = this.fb.group({
      login: '',
      password: '',
  });
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
            .subscribe(
                () => {

                    console.log('login success');
                   
                    
                }
            );
    }
}

}

