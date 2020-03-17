import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router) { }

  form = {
    email: null,
    password: null,
  };

  ngOnInit(): void {
  }

  login() {
    this._userService.loginUser(this.form)
  }


  goToDash() {
    this.router.navigate(['/home'])
  }
}
