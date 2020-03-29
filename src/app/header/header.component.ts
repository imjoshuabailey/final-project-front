import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _userService: UserService) { }

  ngOnInit(): void {
  }

  userName = this._userService.firstName
  browseClicked = false;

  browseButton() {
    if (this.browseClicked == false) {
      return this.browseClicked = true;
    } else {
      return this.browseClicked = false;
    }

  }
}
