import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoleyballComponent } from './voleyball.component';

describe('VoleyballComponent', () => {
  let component: VoleyballComponent;
  let fixture: ComponentFixture<VoleyballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoleyballComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoleyballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
