import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { CvService } from '../services/cv.service';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  @Input() personnes!: Personne[];
  
  /*@Output() selectedPersonne = new EventEmitter();
  ngOnInit() {}
  selectPersonne(selectedPersonne: Personne) {
    this.selectedPersonne.emit(selectedPersonne);
  }*/
  constructor(
    private cvService: CvService
  ) { }
  date = new Date();
  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {
        this.personnes = personnes;
      },
      (erreur) => {
        this.personnes = this.cvService.getFakePersonnes();
        alert(`Problème de connexions les donnèes sont fictives :(`);
      }
    );
  }


}
