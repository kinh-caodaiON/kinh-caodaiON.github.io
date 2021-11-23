import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaodaionAppsComponent } from './caodaion-apps.component';

describe('CaodaionAppsComponent', () => {
  let component: CaodaionAppsComponent;
  let fixture: ComponentFixture<CaodaionAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaodaionAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaodaionAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
