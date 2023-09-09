import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartToastComponent } from './cart-toast.component';

describe('CartToastComponent', () => {
  let component: CartToastComponent;
  let fixture: ComponentFixture<CartToastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartToastComponent]
    });
    fixture = TestBed.createComponent(CartToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
