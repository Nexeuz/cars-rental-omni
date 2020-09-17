import {Component, OnInit, ViewChild} from '@angular/core';
import {CarsService} from '../../core/state/cars.service';
import {Observable} from 'rxjs';
import {Car} from '../../core/state/cars.store';
import {MatCheckbox, MatCheckboxChange} from '@angular/material/checkbox';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @ViewChild('checkbox') checkbox: MatCheckbox;
  models = ['Coroya 2015', 'Coroya 2016'];
  cars$: Observable<Car[]>;
  filterActive = false;
  constructor( public cars: CarsService) {
    this.cars$ = this.cars.query.selectAll();
  }

  ngOnInit(): void {
  }

  listenChange(event: MatCheckboxChange): void {
    this.filterActive = true;
    if (event.source.checked) {
      this.cars$ = this.cars.filteredCars$;
    } else {
      this.cars$ = this.cars.query.selectAll();
      this.filterActive = false;
    }
  }

  filterByModel(model: string): void {
    this.filterActive = true;
    this.cars$ = this.cars.query.selectAll({
      filterBy: (entity, index) => model === entity.model
    });
  }

  resetFilters(): void {
    this.filterActive = false;
    this.checkbox.toggle();
    this.cars$ = this.cars.query.selectAll();
  }
}
