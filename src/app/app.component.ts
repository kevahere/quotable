import { Component } from '@angular/core';
import { Quote } from './quote'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, "he who laughs last"),
    new Quote(1, "simba mwenda pole")
  ]
  constructor() {

  }
}
