import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "he who laughs last","Kevin"),
    new Quote(1, "simba mwenda pole","Ahere")
  ]
  constructor() { }

  ngOnInit() {
  }

}
