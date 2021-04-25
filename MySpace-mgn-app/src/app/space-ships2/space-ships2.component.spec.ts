import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceShips2Component } from './space-ships2.component';

describe('SpaceShips2Component', () => {
  let component: SpaceShips2Component;
  let fixture: ComponentFixture<SpaceShips2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceShips2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceShips2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
