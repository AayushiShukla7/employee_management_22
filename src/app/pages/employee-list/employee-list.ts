import { Component, signal, OnInit } from '@angular/core';
import { EMPLOYEE_MOCK_DATA, IUser } from '../../core/model/interface/User.Model';
import { EmployeeListSkeleton } from '../shared/employee-list-skeleton/employee-list-skeleton';
import { ProgressLoader } from '../shared/progress-loader/progress-loader';
import { FormsModule } from '@angular/forms';
import { TableModule, TableSize } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [
    FormsModule,
    EmployeeListSkeleton,
    ProgressLoader,
    TableModule,
    SelectButtonModule,
    TitleCasePipe
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {

  employees = signal<IUser[]>([]);
  isLoading = signal(true);
  isProcessing = signal(false);

  ngOnInit(): void {
    setTimeout(() => {
      this.employees.set(EMPLOYEE_MOCK_DATA);
      this.isLoading.set(false);
    }, 2000);
  }

  addEmployee(): void {
    this.isProcessing.set(true);

    // Simulate API call
    setTimeout(() => {
      this.isProcessing.set(false);
      console.log('Open Employee Form');
    }, 1000);
  }

}
