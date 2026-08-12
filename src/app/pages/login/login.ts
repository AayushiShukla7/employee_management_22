import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObject: any = {
    userName: '',
    password: ''
  };

  router = inject(Router)

  constructor(private http: HttpClient) {

  }

  onLogin() {
    this.http.post(environment.API_URL + 'login', this.loginObject)
    .subscribe({
      next: (response: any) => {
        if(response.result) {
          // alert("User logged in successfully");
          this.router.navigateByUrl("/admin/dashboard");
        }
        else {
          alert(response.message);
        }
      },
      error: (error: any) => {
        alert("An error occurred while logging in");
      }
    })
  }
}
