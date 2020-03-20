import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BeerApi } from '../models/beer-api';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  serviceBeers() {
    return this.http.get('https://api.punkapi.com/v2/beers?per_page=80');
  }
}