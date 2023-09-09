import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToastComponent } from './added-toast.component';

describe('AddedToastComponent', () => {
  let component: AddedToastComponent;
  let fixture: ComponentFixture<AddedToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedToastComponent]
    });
    fixture = TestBed.createComponent(AddedToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
