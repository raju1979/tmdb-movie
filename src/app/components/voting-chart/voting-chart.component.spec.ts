import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingChartComponent } from './voting-chart.component';

describe('VotingChartComponent', () => {
  let component: VotingChartComponent;
  let fixture: ComponentFixture<VotingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
