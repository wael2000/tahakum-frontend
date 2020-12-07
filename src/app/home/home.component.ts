import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fruit } from '../../assets/fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fruits:Fruit[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFruits();
	}

  getFruits(): void {
    this.apiService.getAll()
      .subscribe(fruits => {
        this.fruits = fruits;
        console.log(fruits);
      },
      error => console.log(error));
  }

}
