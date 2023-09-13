import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  monObservable!: Observable<string>;
  mesImages = ['firas.jpeg', 'cv.png', '404.png', 'zizou.jpg'];
  currentImage: string | undefined;
  ngOnInit() {
    this.monObservable = new Observable((observer) => {
      let i = this.mesImages.length - 1;
      setInterval(() => {
        observer.next(this.mesImages[i]);
        if (i > 0) {
          i--;
        } else {
          i = this.mesImages.length - 1;
        }
      }, 1500);
    });
    this.monObservable.subscribe((result) => {
      console.log(result);
      this.currentImage = result;
    });
  }
}
