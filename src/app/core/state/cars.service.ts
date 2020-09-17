import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Car, CarsStore} from './cars.store';
import {Observable} from 'rxjs';
import {CarsQuery} from './cars.query';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  filteredCars$ = this.query.selectAll(
    {
      filterBy: ((entity, index) => entity.year === 2015)
    }
  );

  constructor(private http: HttpClient,
              private store: CarsStore,
              public query: CarsQuery) { }

  getCars(): Observable<Car[]> {
   return  this.http.get<Car[]>('assets/db.json')
      .pipe(
        tap(it => {
           this.store.set(it);
        })
      );
  }
}
