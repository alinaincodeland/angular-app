import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-app';
  name='Angular'
  imgURL = 'https://picsum.photos/seed/picsum/200/300'

  changeImage(e : KeyboardEvent) {
    this.imgURL = (e.target as HTMLInputElement).value
  }
  getName() {
    return this.name
  }
}
