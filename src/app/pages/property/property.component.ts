import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  properties: Property[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
