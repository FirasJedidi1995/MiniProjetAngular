import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css'],
})
export class AddPersonneComponent implements OnInit {
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit() {}

  addPersonne(formumaire: NgForm) {
    this.cvService.addPersonne(formumaire.value).subscribe(
      (reponse) => this.router.navigate(['']),
      (erreur) => console.log(erreur)
    );
  }
}
