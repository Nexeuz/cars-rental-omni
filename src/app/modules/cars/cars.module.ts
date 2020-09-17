import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import {SharedModule} from '../../shared/shared.module';
import {MatRadioModule} from '@angular/material/radio';
import { FilterCarsComponent } from './components/filter-cars/filter-cars.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [CarsComponent, FilterCarsComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class CarsModule { }
