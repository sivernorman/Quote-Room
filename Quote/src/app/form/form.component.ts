import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newQuote =new Quotes(1,'','','','',0,new Date());
@Output() add=new EventEmitter < Quotes>();

  constructor() { }
  submitQuote(){
this.add.emit(this.newQuote);
    this.newQuote =new Quotes(1,'','','','',0,new Date());

  }
  ngOnInit(): void {
  }

}
