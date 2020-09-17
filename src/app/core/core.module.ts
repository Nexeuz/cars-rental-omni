import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {environment} from '../../environments/environment';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()

  ]
})
export class CoreModule { }
