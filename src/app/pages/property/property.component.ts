import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../../shared/services/property.service';
import { Property } from '../../models/property';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  properties: Property[] = [];

  constructor(private propertyService: PropertyService) { }

  ngOnInit(): void {

      this.propertyService.getAll().subscribe((propertiesFromServer: Property[]) => {
      this.properties = propertiesFromServer;
      console.log(propertiesFromServer);
    });
  }
}
