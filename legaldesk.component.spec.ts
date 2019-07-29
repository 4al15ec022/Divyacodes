import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegaldeskComponent } from './legaldesk.component';

describe('LegaldeskComponent', () => {
  let component: LegaldeskComponent;
  let fixture: ComponentFixture<LegaldeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegaldeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegaldeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
