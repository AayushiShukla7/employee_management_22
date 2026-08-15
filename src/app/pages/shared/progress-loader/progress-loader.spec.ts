import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLoader } from './progress-loader';

describe('ProgressLoader', () => {
  let component: ProgressLoader;
  let fixture: ComponentFixture<ProgressLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressLoader],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressLoader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
