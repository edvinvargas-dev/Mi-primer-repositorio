import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador123',
  standalone: true,
  imports: [],
  templateUrl: './saludador123.component.html',
  styleUrl: './saludador123.component.css'
})
export class Saludador123Component {
mensaje: string = ""; 

saludar(){
  this.mensaje = "Hola Mundo";
}
}
