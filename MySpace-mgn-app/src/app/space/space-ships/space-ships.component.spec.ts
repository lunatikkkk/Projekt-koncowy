import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceShipsComponent } from './space-ships.component';

describe('SpaceShipsComponent', () => {
  let component: SpaceShipsComponent;
  let fixture: ComponentFixture<SpaceShipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceShipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
