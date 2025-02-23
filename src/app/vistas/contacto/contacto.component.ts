import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
//import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  public contactForm: FormGroup;
  public enviado:boolean = false;
  public error:boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', Validators.required,)
    });
  }

  // Función para enviar correo con EmailJS
  enviarCorreo() {
    if (this.contactForm.invalid) {
      return;
    }

    const serviceID = 'service_cpr167k'; // Reemplázalo con tu Service ID de EmailJS
    const templateID = 'template_oz9xc8k'; // Reemplázalo con tu Template ID
    const publicKey = '3P4d9q7htp8Pf57Pt'; // Reemplázalo con tu Public Key

    const datosFormulario = this.contactForm.value;

    const templateParams = {
      nombre: datosFormulario.nombre,
      apellidos: datosFormulario.apellidos,
      telefono: datosFormulario.telefono,
      email: datosFormulario.email,
      mensaje: datosFormulario.mensaje
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        this.enviado = true;
        this.error = false;
        this.contactForm.reset(); // Limpiar el formulario
      })
      .catch(() => {
        this.enviado = false;
        this.error = true;
      });
  }
}