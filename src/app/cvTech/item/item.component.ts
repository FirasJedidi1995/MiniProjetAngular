import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CvService } from '../services/cv.service';
import { Personne } from '../../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne!: Personne;
  // @Output() sendPersonne = new EventEmitter();
  constructor(private cvService: CvService) {}

  ngOnInit() {}

  selectPersonne() {
    // this.sendPersonne.emit(this.personne);
    this.cvService.selectItem(this.personne);
  }
}
