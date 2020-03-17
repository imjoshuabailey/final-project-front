import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router) { }

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

  goToDash() {
    this.router.navigate(['/home']);
  }
}
