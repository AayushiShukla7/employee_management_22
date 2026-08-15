import { Component, signal } from '@angular/core';
import { IUser } from '../../core/model/interface/User.Model';
import { EmployeeListSkeleton } from '../shared/employee-list-skeleton/employee-list-skeleton';

@Component({
  selector: 'app-employee-list',
  imports: [
    EmployeeListSkeleton
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  empList!: Array<IUser>;
  isLoading = signal(true);
  isProcessing = signal(false);

}
