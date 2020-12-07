import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Fruit } from '../../assets/fruit';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss']
})
export class FruitComponent implements OnInit {
  fruits:Fruit[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
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
