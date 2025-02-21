import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDetalleComponent } from './anime-detalle.component';

describe('AnimeDetalleComponent', () => {
  let component: AnimeDetalleComponent;
  let fixture: ComponentFixture<AnimeDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
