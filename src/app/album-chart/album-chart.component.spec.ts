import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumChartComponent } from './album-chart.component';

describe('AlbumChartComponent', () => {
  let component: AlbumChartComponent;
  let fixture: ComponentFixture<AlbumChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
