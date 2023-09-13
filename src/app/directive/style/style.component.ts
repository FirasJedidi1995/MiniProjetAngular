import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css'],
})
export class StyleComponent {
  @Input() color = 'white';
  @Input() bgColor = 'lightblue';
  size = '25px';

  changeSize(size: any) {
    this.size = size + 'px';
  }
}
