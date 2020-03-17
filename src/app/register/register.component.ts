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
    // this._userService.registerUser(this.form).subscribe((res: any) => {
    //   console.log(res);
    //   sessionStorage.setItem('token', res.token);
    //   sessionStorage.setItem('userId', res.userId);
    //   this._userService.firstName = res.firstName;
    //   this._userService.isLoggedIn = true;
    //   this.goToDash();
    // })
  }

  goToDash() {
    // this.router.navigate(['/home']);
  }
}
