import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { CadastroService } from './shared';



@NgModule({
  declarations: [
    CadastroCandidatoComponent,
    CadastroEmpresaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CadastroModule { }
