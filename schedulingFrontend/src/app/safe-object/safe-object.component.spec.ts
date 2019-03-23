import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeObjectComponent } from './safe-object.component';

describe('SafeObjectComponent', () => {
  let component: SafeObjectComponent;
  let fixture: ComponentFixture<SafeObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
