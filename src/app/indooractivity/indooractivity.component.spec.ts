import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndooractivityComponent } from './indooractivity.component';

describe('IndooractivityComponent', () => {
  let component: IndooractivityComponent;
  let fixture: ComponentFixture<IndooractivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndooractivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndooractivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
