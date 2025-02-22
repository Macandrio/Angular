import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';import { RegistroService } from '../../servicios/registro.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';
  isRegistering = false;
  errorMessage: string | null = null;

  constructor(private authService: RegistroService, private router: Router) {}

  authenticate() {
    this.errorMessage = null;

    if (this.isRegistering) {
      const registrado = this.authService.register(this.email, this.password);
      if (registrado) {
        alert('✅ Usuario registrado con éxito');
        this.isRegistering = false; // Cambiar a modo login
      } else {
        this.errorMessage = "❌ El usuario ya existe.";
      }
    } else {
      const loggedIn = this.authService.login(this.email, this.password);
      if (loggedIn) {
        alert('✅ Sesión iniciada correctamente');
        this.router.navigate([''])
      } else {
        this.errorMessage = "❌ Usuario o contraseña incorrectos.";
      }
    }
  }
}