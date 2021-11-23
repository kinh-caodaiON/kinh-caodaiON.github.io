import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaodaionAppComponent } from './caodaion-app.component';

describe('CaodaionAppComponent', () => {
  let component: CaodaionAppComponent;
  let fixture: ComponentFixture<CaodaionAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaodaionAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaodaionAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
