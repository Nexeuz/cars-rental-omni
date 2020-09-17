import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import {SharedModule} from '../../shared/shared.module';
import {MatRadioModule} from '@angular/material/radio';
import { FilterCarsComponent } from './components/filter-cars/filter-cars.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [CarsComponent, FilterCarsComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule,
    MatRadioModule,
    MatCheckboxModule
  ]
})
export class CarsModule { }
