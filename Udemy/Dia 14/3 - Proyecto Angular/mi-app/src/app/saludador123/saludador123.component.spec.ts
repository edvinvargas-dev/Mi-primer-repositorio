import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saludador123Component } from './saludador123.component';

describe('Saludador123Component', () => {
  let component: Saludador123Component;
  let fixture: ComponentFixture<Saludador123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saludador123Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Saludador123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
