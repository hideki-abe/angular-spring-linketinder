import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  
  onCandidatoCreate(candidatos: any){
      console.log(candidatos);
      this.httpClient.post("http://localhost:8080/zghero/candidatos", candidatos)
      .subscribe((response) => {
        console.log(response);
      });
  }

  onEmpresaCreate(empresas: any){
    console.log(empresas);
    this.httpClient.post("http://localhost:8080/zghero/empresas", empresas)
    .subscribe((response) => {
      console.log(response);
    });
}

}
