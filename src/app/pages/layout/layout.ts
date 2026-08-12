import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { HugeiconsIconComponent } from '@hugeicons/angular';
import { DashboardSquare03Icon, LaborIcon, CodeFolderIcon, Task01Icon, Analytics02Icon, ArrowLeft05Icon, ArrowRight05Icon, ManIcon, WomanIcon } from '@hugeicons/core-free-icons';
import { IUser } from '../../core/model/interface/User.Model';
import { GlobalConstants } from '../../core/globalConstants/Global.Constant';
import { Observable } from 'rxjs';
import { ThemeService } from '../../core/services/theme';

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
  maleIcon = ManIcon;
  femaleIcon = WomanIcon;

  // Theme Switch
  isDarkMode$: Observable<boolean>;

  loggedUserData!: IUser;
  router = inject(Router);

  constructor(private themeService: ThemeService) {
    const localData = localStorage.getItem(GlobalConstants.LOGIN_LOCAL_KEY);
    if (localData) {
      this.loggedUserData = JSON.parse(localData);
    }

    this.isDarkMode$ = this.themeService.isDarkMode$;
  }

  onLogOut() {
    localStorage.removeItem(GlobalConstants.LOGIN_LOCAL_KEY);
    this.router.navigateByUrl("/login");
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
