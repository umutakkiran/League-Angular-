import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchSliderComponent } from './match-slider.component';

describe('MatchSliderComponent', () => {
  let component: MatchSliderComponent;
  let fixture: ComponentFixture<MatchSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
