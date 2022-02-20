import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialSolarComponent } from './residential-solar.component';

describe('ResidentialSolarComponent', () => {
  let component: ResidentialSolarComponent;
  let fixture: ComponentFixture<ResidentialSolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentialSolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialSolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
