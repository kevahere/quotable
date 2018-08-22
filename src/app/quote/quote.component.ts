import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "he who laughs last", "Kevin",new Date(2018,6,8)),
    new Quote(1, "simba mwenda pole", "Ahere",new Date(2018,6,8)),
  ]
  //quote:Quote;
  deleteQuote(isComplete,index) {
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  };

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id=quoteLength+1;
      quote.postDate = new Date(quote.postDate)
      this.quotes.push(quote)
  }
  constructor() {}
  ngOnInit() {
  }

}
