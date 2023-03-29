import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainEffectComponent } from './rain-effect.component';

describe('RainEffectComponent', () => {
  let component: RainEffectComponent;
  let fixture: ComponentFixture<RainEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainEffectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
