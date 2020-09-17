import { Injectable } from '@angular/core';

import { Store, StoreConfig, EntityState, EntityStore,  } from '@datorama/akita';

export interface Car {
  id: number;
  photoX2: string;
  photoShort: string;
  model: string;
  year: number;
  brand: string;
  description: string;
  price: string;
}

export interface CarsState extends EntityState<Car, number> {
  filter: string;
}



@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cars' , idKey: 'id' })
export class CarsStore extends EntityStore<CarsState> {

  constructor() {
    super({filter: 'ALL'});
  }

}
