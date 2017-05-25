import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent implements OnInit {

  cars = [
    {
      vin: 'Test1',
      year: '2011',
      brand: 'Brand1',
      color: 'blue'
    },
    {
      vin: 'Test2',
      year: '2012',
      brand: 'Brand2',
      color: 'yellow'
    },
    {
      vin: 'Test3',
      year: '2013',
      brand: 'Brand3',
      color: 'red'
    },
    {
      vin: 'Test4',
      year: '2014',
      brand: 'Brand4',
      color: 'black'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
