import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../../../core/state/cars.store';
import {MatDialog} from '@angular/material/dialog';
import {ModalCarDetailComponent} from '../modal-car-detail/modal-car-detail.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openCar(): void {
    this.matDialog.open(ModalCarDetailComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw',
      data: this.car
    });
  }
}
