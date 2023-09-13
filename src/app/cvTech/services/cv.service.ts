import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { Personne } from 'src/app/Model/Personne';
const API_LINK = 'http://localhost:3000/cv';
@Injectable({
  providedIn: 'root'
})
export class CvService {

  personnes!: Personne[];
  selectItemSubject = new Subject<Personne>();
  constructor(
    private http: HttpClient
  ) {
  }
  getFakePersonnes() {
    return this.personnes = [
      new Personne(1, 'Firas', 'jedidi', 28, 123456, 'etudiant', 'firas.jpeg'),
      new Personne(2, 'Fedy', 'jedidi', 24, 123456, 'etudiant', ''),
      new Personne(3, 'Haithem', 'jedidi', 22, 123456, 'etudiant', '            ')
    ];
  }
  getPersonnes(): Observable<Personne[]> {
    return this.http.get<Personne[]>(API_LINK);
  }
  getFakePersonneById(id:number) {
    // 1 == '1'
    return this.personnes.find(
      (personne) => personne.id === +id
    );
  }
  getPersonneById(id:number): Observable<Personne> {
    return this.http.get<Personne>(API_LINK + `/${id}`);
  }
  selectItem(personne: Personne) {
    this.selectItemSubject.next(personne);
  }
  deletePersonne(id:number): Observable<any> {
    return this.http.delete(API_LINK  + `/${id}`);
  }
  addPersonne(personne: Personne) {
    return this.http.post(API_LINK, personne);
  }
}
