import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorDetalleComponent } from './productor-detalle.component';

describe('ProductorDetalleComponent', () => {
  let component: ProductorDetalleComponent;
  let fixture: ComponentFixture<ProductorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductorDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
