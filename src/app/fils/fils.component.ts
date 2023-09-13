import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent implements OnInit {
  @Input() filsProperty: any;
  @Output() sendRequestTodata = new EventEmitter();
  ngOnInit() {
    console.log(
      'Fils Component: Voici le contenu de la variable color de mon pére : ',
      this.filsProperty
    );
  }
  sendEvent() {
    this.sendRequestTodata.emit(`Please can i have some money :)`);
  }
}
