import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginForm: FormGroup;
  public errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;

    // Verificar si el usuario existe en localStorage
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
      localStorage.setItem('isLoggedIn', 'true');
      
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
      
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}