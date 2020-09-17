import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../core/state/cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../core/state/cars.store';
import {MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars$: Observable<Car[]>;
  constructor( public cars: CarsService) {
    this.cars$ = this.cars.query.selectAll();
  }

  ngOnInit(): void {
  }

  listenChange(event: MatCheckboxChange): void {
    if (event.source.checked) {
      this.cars$ = this.cars.filteredCars$;
    } else {
      this.cars$ = this.cars.query.selectAll();
    }
  }
}
