import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { BeerApi } from 'src/app/models/beer-api';

@Component({
  selector: 'app-beer-board',
  templateUrl: './beer-board.component.html',
  styleUrls: ['./beer-board.component.sass']
})
export class BeerBoardComponent implements OnInit {
  beers;

  constructor(private s: ServiceService) { }

  ngOnInit(): void {
    this.s.serviceBeers().subscribe((response: BeerApi) => {
      this.beers = response;
    })
  }

}
