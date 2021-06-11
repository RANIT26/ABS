import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormContentComponent } from './input-form-content.component';

describe('InputFormContentComponent', () => {
  let component: InputFormContentComponent;
  let fixture: ComponentFixture<InputFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
