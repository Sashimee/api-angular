import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerBoardComponent } from './beer-board.component';

describe('BeerBoardComponent', () => {
  let component: BeerBoardComponent;
  let fixture: ComponentFixture<BeerBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
