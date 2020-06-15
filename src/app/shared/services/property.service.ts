import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from 'src/app/models/property';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private httpClient: HttpClient) { }

   public getAll(): Observable<Property[]>{
    return this.httpClient.get<Property[]>('http://localhost:8080/properties');
  }
}
