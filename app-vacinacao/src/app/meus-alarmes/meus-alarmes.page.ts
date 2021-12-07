import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-meus-alarmes',
  templateUrl: './meus-alarmes.page.html',
  styleUrls: ['./meus-alarmes.page.scss'],
})


export class MeusAlarmesPage {

  public api;
  public listaRemedios = [];

  constructor(public httpClient: HttpClient) {
    this.listarRemedios();
   }

  async listarRemedios() {
    //Fazendo uma requisição do body da nossa API criada
    this.httpClient.get('http://localhost:4000/medicamentos/').subscribe((response) => {
      //Passando o body (a api) para uma variável
      this.api = response;
      //Passando para a variável, a quantidade de elementos dentro da API
      let qntdApi = Object.keys(this.api).length;

      for (let i = 0; i < qntdApi; i++) {
        this.listaRemedios[i] = this.api[i]
      }
    })
  }

  async deletarRemedio(id:number){

    this.httpClient.delete('http://localhost:4000/removerMedicamento/:id')

  }



}
