import { Component, OnInit } from '@angular/core';
import { PremierService } from '../premier.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService],
})
export class ColorComponent implements OnInit {
  color = 'red';
  constructor(
    private premierService: PremierService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.color = params['default'];
    });
  }
  ProcessReq(data: any) {
    alert(data);
  }
  loggerMesData() {
    this.premierService.logger('test');
  }
  goTocv() {
    const link = ['cv'];
    this.router.navigate(link);
  }
}
