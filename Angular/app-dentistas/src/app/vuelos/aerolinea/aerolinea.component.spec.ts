import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AerolineaComponent } from './aerolinea.component';

describe('AerolineaComponent', () => {
  let component: AerolineaComponent;
  let fixture: ComponentFixture<AerolineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
