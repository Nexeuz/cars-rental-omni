import {Component, OnInit} from '@angular/core';
import {CarsService} from './core/state/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'omnibank';

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.carsService.getCars()
      .subscribe();
  }
}
