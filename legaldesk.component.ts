import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: string;
  color: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'A', name: 'Rabbit', color: 'white' , symbol: 'RA'},
  {position: 'B', name: 'Buffalo', color: 'cement', symbol: 'BF'},
  {position: 'C', name: 'Dog', color: 'brown', symbol: 'DG'},
  {position: 'D', name: 'Cat', color: 'orange', symbol: 'CT'},
  {position: 'E', name: 'Ant', color: 'black', symbol: 'AT'},
  {position: 'F', name: 'Butterfly', color: 'blue', symbol: 'BF'},
  {position: 'G', name: 'Cockroach', color: 'brown', symbol: 'CR'},
  {position: 'H', name: 'Mosquito', color: 'black', symbol: 'MQ'},
  {position: 'I', name: 'Donkey', color: 'grey', symbol: 'DK'},
  {position: 'J', name: 'Monkey', color: 'brown', symbol: 'MK'},
];

@Component({
  selector: 'app-legaldesk',
  templateUrl: './legaldesk.component.html',
  styleUrls: ['./legaldesk.component.scss']
})
export class LegaldeskComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'color', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
