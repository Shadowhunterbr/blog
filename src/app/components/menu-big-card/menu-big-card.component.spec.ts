import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBigCardComponent } from './menu-big-card.component';

describe('MenuBigCardComponent', () => {
  let component: MenuBigCardComponent;
  let fixture: ComponentFixture<MenuBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuBigCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
