import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  tableau = [
    'red',
    'brow',
    'pink',
    'black',
    'blue',
    'green',
    'lightyellow',
    'lightgreen',
    'coral',
  ];
  @HostBinding('style.borderColor') bc: any;
  @HostBinding('style.color') color: any;
  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.tableau.length - 1));
    this.bc = this.tableau[index];
    this.color = this.tableau[index];
  }
  constructor() {}
}
