import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListSkeleton } from './employee-list-skeleton';

describe('EmployeeListSkeleton', () => {
  let component: EmployeeListSkeleton;
  let fixture: ComponentFixture<EmployeeListSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeListSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeListSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
