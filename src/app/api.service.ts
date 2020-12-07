import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Fruit } from '../assets/fruit';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "http://server-demo.apps.cluster-tahakum-110c.tahakum-110c.example.opentlc.com/api/fruits";

  constructor(private httpClient: HttpClient) { }

  public getAll() : Observable<Fruit[]> {
    //this.httpClient.get('http://server-demo.apps.cluster-tahakum-110c.tahakum-110c.example.opentlc.com/api/fruits');
		return this.httpClient.get<Fruit[]>(this.SERVER_URL);
	}

}
