import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroIcons } from './hero-icons';

describe('HeroIcons', () => {
  let component: HeroIcons;
  let fixture: ComponentFixture<HeroIcons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroIcons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroIcons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
