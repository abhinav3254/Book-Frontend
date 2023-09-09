import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreaseToastComponent } from './decrease-toast.component';

describe('DecreaseToastComponent', () => {
  let component: DecreaseToastComponent;
  let fixture: ComponentFixture<DecreaseToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecreaseToastComponent]
    });
    fixture = TestBed.createComponent(DecreaseToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
