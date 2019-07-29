import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrComponent } from './customerr.component';

describe('CustomerrComponent', () => {
  let component: CustomerrComponent;
  let fixture: ComponentFixture<CustomerrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
