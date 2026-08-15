import { Component } from '@angular/core';
import { Skeleton } from '../skeleton/skeleton';

@Component({
  selector: 'app-employee-list-skeleton',
  imports: [Skeleton],
  templateUrl: './employee-list-skeleton.html',
  styleUrl: './employee-list-skeleton.css',
})
export class EmployeeListSkeleton {

  readonly rows = Array.from({ length: 8 });

}


