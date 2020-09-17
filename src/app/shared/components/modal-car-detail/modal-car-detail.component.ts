import {Component, Inject, OnInit} from '@angular/core';
import {Car} from '../../../core/state/cars.store';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-car-detail',
  templateUrl: './modal-car-detail.component.html',
  styleUrls: ['./modal-car-detail.component.scss']
})
export class ModalCarDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Car) { }

  ngOnInit(): void {
  }

}
