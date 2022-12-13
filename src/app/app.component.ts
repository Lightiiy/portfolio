import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  public isWelcomeVisible: boolean = true;

  unwelcomeThePage(){
    this.isWelcomeVisible = !this.isWelcomeVisible;
  }
}
