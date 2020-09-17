import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CarsStore, CarsState } from './cars.store';

@Injectable({ providedIn: 'root' })
export class CarsQuery extends QueryEntity<CarsState> {


  constructor(protected store: CarsStore) {
    super(store);
  }

}
