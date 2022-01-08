import { Component } from '@angular/core';
import { Quote } from './quotes/quote.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote: Quote[]=[
  new Quote('Time takes everyting','silver Storm' ,'carola'),
   new Quote('ONE minut down next minute up','kalondu' ,'shawn'),
   new Quote('greatness requires internal toughness','Storm' ,'B.jobes'),

];
   
}
