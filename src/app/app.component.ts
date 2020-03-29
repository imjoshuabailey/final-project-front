import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project-front';
  browseClicked = false;

  browseButton() {
    if(this.browseClicked == false) {
      return this.browseClicked = true;
    }else {
      return this.browseClicked = false;
    }
    
  }
}
