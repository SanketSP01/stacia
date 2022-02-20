import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialSolarComponent } from './commercial-solar.component';

describe('CommercialSolarComponent', () => {
  let component: CommercialSolarComponent;
  let fixture: ComponentFixture<CommercialSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialSolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
