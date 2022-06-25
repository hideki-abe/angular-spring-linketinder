import { Component, OnInit } from '@angular/core';
import { VagaService } from '../service';

@Component({
  selector: 'app-cadastro-vaga',
  templateUrl: './cadastro-vaga.component.html',
  styleUrls: ['./cadastro-vaga.component.css']
})
export class CadastroVagaComponent implements OnInit {

  constructor(private vagaService: VagaService) { }

  ngOnInit(): void {
  }

  create(empresas: 
    {
      nome: string, 
      descricao: string,
      lugar: string,
      id_empresa: number
    }){
      this.vagaService.onVagaCreate(empresas);
  }

}
