import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupDisplayComponent } from './form-group-display.component';

describe('FormGroupDisplayComponent', () => {
  let component: FormGroupDisplayComponent;
  let fixture: ComponentFixture<FormGroupDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
