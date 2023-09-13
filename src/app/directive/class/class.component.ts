import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
})
export class ClassComponent {
  teams=['est','om','barca','milan']
  est = false;
  milan = true;
  barca = false;
  changeTeam() {
    this.est = true;
    this.barca = false;
    this.milan = false;
  }
  show: any;
}
