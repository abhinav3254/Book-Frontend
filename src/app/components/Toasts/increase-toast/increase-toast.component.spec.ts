import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseToastComponent } from './increase-toast.component';

describe('IncreaseToastComponent', () => {
  let component: IncreaseToastComponent;
  let fixture: ComponentFixture<IncreaseToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncreaseToastComponent]
    });
    fixture = TestBed.createComponent(IncreaseToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
