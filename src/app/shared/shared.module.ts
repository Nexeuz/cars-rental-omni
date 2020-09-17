import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCarsComponent } from './components/search-cars/search-cars.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { CarComponent } from './components/car/car.component';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { ModalCarDetailComponent } from './components/modal-car-detail/modal-car-detail.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DetailsComponentComponent } from './components/details-component/details-component.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [SearchCarsComponent, HeaderComponent, CarComponent, ModalCarDetailComponent, DetailsComponentComponent],
  exports: [SearchCarsComponent, HeaderComponent, CarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatRippleModule,
    MatDialogModule,
    RouterModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
