import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService) { }

  form = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
  };

  ngOnInit(): void {
  }
  signUp() {
    this._userService.registerUser(this.form)
  }

 
}
