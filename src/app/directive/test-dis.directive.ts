import { Directive,inject ,ElementRef ,input } from '@angular/core';

@Directive({
  selector: '[appTestDis]',
  host:{
    'body:(click)':'changeColor()'
  }
})
export class TestDisDirective {
  private ele=inject(ElementRef);
  // read only signal in directive and i can set value from parent
  colorName=input<string>('red');

  changeColor(){
    this.ele.nativeElement.style.color=this.colorName();
  }
}
