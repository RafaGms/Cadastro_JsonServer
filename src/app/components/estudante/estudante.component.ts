import { EstudanteService } from './../../service/estudante.service';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Estudante } from './estudante';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit{

  estudantes: Estudante[] = [];
  formGroupEstudante: FormGroup;

  constructor(private EstudanteService: EstudanteService, private formBuilder: FormBuilder) {

    this.formGroupEstudante = formBuilder.group({
      id: [''],
      name: [''],
      email: [''],
      idade:[''],
      nivel:[''],
      escola:['']

    });
  }    // para o componente chamar o serviço


  ngOnInit(): void {
    this.loadEstudos();
  } 

  loadEstudos() {
    this.EstudanteService.getEstudante().subscribe({
      next: data => this.estudantes = data,                         //next pega os clientes
      error: (error) => console.log('Error ao chamar o endpoint' + error)
    })
  }

  save() {
    this.EstudanteService.save(this.formGroupEstudante.value).subscribe({
      next: data => {
        this.estudantes.push(data);
        this.formGroupEstudante.reset();
      }
    })
  }
}
