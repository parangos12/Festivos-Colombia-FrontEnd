import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarFModalComponent } from './verificar-fmodal.component';

describe('VerificarFModalComponent', () => {
  let component: VerificarFModalComponent;
  let fixture: ComponentFixture<VerificarFModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarFModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificarFModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
