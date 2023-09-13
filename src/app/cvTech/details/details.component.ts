import { Component, Input, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';

import { LoggerService } from '../../services/logger.service';
import { Personne } from '../../Model/Personne';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  personne!: Personne;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((mesParams) => {
      this.cvService.getPersonneById(mesParams['id']).subscribe(
        (personne) => (this.personne = personne),
        (erreur) => this.router.navigate([''])
      );
    });
  }

  deletePersonne() {
    this.cvService.deletePersonne(this.personne.id).subscribe(
      (reponse) => {
        console.log(reponse);
        this.router.navigate(['']);
      },
      (errur) => console.log(errur)
    );
  }
}
