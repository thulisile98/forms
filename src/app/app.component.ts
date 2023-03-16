import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(5), UsernameValidators.cannotContainSpace, UsernameValidators.cannotContainCharacter]),
    'password': new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }


  get password() {
    return this.form.get('password');
  }
  constructor() { }
  ngOnInit() {

  }

}

