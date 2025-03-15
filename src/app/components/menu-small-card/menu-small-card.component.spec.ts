import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSmallCardComponent } from './menu-small-card.component';

describe('MenuSmallCardComponent', () => {
  let component: MenuSmallCardComponent;
  let fixture: ComponentFixture<MenuSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSmallCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
