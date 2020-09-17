import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarDetailComponent } from './modal-car-detail.component';

describe('ModalCarDetailComponent', () => {
  let component: ModalCarDetailComponent;
  let fixture: ComponentFixture<ModalCarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
