import { Injectable } from '@angular/core';

@Injectable()
export class PremierService {
  data = ['data1', 'data2', 'data3', 'data4'];
  logger(data: any) {
    console.log(this.data);
    console.log(data);
  }
  addData(data: any) {
    this.data.push(data);
  }
  constructor() {}
}
