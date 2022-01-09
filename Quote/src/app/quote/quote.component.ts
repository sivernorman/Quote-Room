import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 quotes:Quotes[]=[
   new Quotes(1,'inspirational','The worst monsters are the ones we create','storm','carola',new Date(2019,7,22)),
   new Quotes(2,'life','With great power comes grea responsibility','william','kenny',new Date(2017,6,19)),
  //  new Quotes(3,'inspirational','The worst monsters are the ones we create','storm','carola',new Date(2019,7,22)),
  //  new Quotes(4,'life','With great power comes grea responsibility','william','kenny',new Date(2017,6,19))

 ]
 addNewQuote(quote:any){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  this.quotes.push(quote)
 }
 deleteQuote(index: any){
  let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

  if (toDelete){
    this.quotes.splice(index,1)
   }}
   constructor() { };

  ngOnInit(): void {
  }

}
