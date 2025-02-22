import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  public registerForm: FormGroup;
  public errorMessage: string = '';
  public successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  register() {

    if (this.registerForm.invalid) {
      return;
    }

    const { username, password } = this.registerForm.value;

    // Verificar si el usuario ya existe en localStorage
    if (localStorage.getItem(username)) {
      this.errorMessage = 'El nombre de usuario ya está en uso.';
      return;
    }

    // Guardar usuario en localStorage
    localStorage.setItem(username, password);

    localStorage.setItem('isLoggedIn', 'true');
    
    this.router.navigate(['']).then(() => {
      window.location.reload();
    });
    
    this.router.navigate(['']);
    
  }
}