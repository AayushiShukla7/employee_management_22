import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HugeiconsIconComponent } from '@hugeicons/angular';
import { DashboardSquare03Icon, LaborIcon, CodeFolderIcon, Task01Icon, Analytics02Icon, ArrowLeft05Icon, ArrowRight05Icon } from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    HugeiconsIconComponent,
    NgClass
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  isSidebarOpen: boolean = true;

  // Icons
  dashboardIcon = DashboardSquare03Icon;
  employeeIcon = LaborIcon;
  projectIcon = CodeFolderIcon;
  assignmentIcon = Task01Icon;
  reportIcon = Analytics02Icon;
  leftArrowicon = ArrowLeft05Icon;
  rightArrowicon = ArrowRight05Icon;
}
