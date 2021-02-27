import { Component } from '@angular/core';
import  arraywords from '../utills/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'wordgen-app';

  words = '';
  limit = 10;

  handleSlideChange(value: any) {
    console.log(value);
    this.limit = value;
  }

  generate() {
    this.words = arraywords.slice(0, this.limit).join();
  }
}
