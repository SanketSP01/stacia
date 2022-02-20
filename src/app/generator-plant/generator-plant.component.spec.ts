import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorPlantComponent } from './generator-plant.component';

describe('GeneratorPlantComponent', () => {
  let component: GeneratorPlantComponent;
  let fixture: ComponentFixture<GeneratorPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratorPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
