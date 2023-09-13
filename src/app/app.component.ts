import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /* color = 'red';
  show = false;
  changeStatus() {
    this.show = !this.show;
  }*/
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get('http://localhost:3000/todo').subscribe(
      (data) => console.log(data),
      (erreur) => console.log(erreur),
    );
  }
}
