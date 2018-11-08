import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStyleComponent } from './cell-style.component';

describe('CellStyleComponent', () => {
  let component: CellStyleComponent;
  let fixture: ComponentFixture<CellStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
