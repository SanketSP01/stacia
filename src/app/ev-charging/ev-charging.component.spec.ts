import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvChargingComponent } from './ev-charging.component';

describe('EvChargingComponent', () => {
  let component: EvChargingComponent;
  let fixture: ComponentFixture<EvChargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvChargingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
