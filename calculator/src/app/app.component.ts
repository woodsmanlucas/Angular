import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  public result:number;     // *** 'this' must be used to access a class level declaration.
  public resultsub:number;
  public product:number;
  public quotient:number;
  public Operand1:string;   // *** Same as above.
  public Operand2:string;   // *** Same as above.
  doAddition() {
    this.result=Number(this.Operand1) + Number(this.Operand2); //Note how ‘this’ is used.
    this.result = Number(this.result.toFixed(2))
    this.resultsub = null
    this.product = null
    this.quotient = null

  }
  doSubtraction() {
    this.resultsub=Number(this.Operand1) - Number(this.Operand2); //Note how ‘this’ is used.
    this.resultsub = Number(this.resultsub.toFixed(2))
    this.result = null
    this.product = null
    this.quotient = null
  }
  doMultiplication() {
    this.product=Number(this.Operand1) * Number(this.Operand2); //Note how ‘this’ is used.
    this.product = Number(this.product.toFixed(2))
    this.resultsub = null
    this.result = null
    this.quotient = null
  }
  doDivision() {
    this.quotient=Number(this.Operand1) / Number(this.Operand2); //Note how ‘this’ is used.
    this.quotient = Number(this.quotient.toFixed(2))
    this.resultsub = null
    this.result = null
    this.product = null
  }
}
