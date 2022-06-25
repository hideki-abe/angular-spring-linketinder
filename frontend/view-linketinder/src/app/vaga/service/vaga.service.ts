import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VagaService {

  constructor(private httpClient: HttpClient) { }

  onVagaCreate(vagas: any){
      console.log(vagas);
      this.httpClient.post("http://localhost:8080/zghero/vagas", vagas)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
