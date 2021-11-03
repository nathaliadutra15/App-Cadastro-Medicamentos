import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-alarme',
  templateUrl: './alarme.page.html',
  styleUrls: ['./alarme.page.scss'],
})
export class AlarmePage {

  public options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  public nomeMedicamento: string;
  public intervaloH: number;
  public api;
  public switch = false;
  public quantidade_pilulas = 0;
  public listaRemedios = [];

  constructor( private httpClient: HttpClient) {
  }


  async listarRemedios() {
    //Fazendo uma requisição do body da nossa API criada
    this.httpClient.get('http://localhost:4000/medicamentos/').subscribe((response) => {
      //Passando o body (a api) para uma variável
      this.api = response;
      //Passando para a variável, a quantidade de elementos dentro da API
      let qntdApi = Object.keys(this.api).length;

      for (let i = 0; i < qntdApi; i++) {
        this.listaRemedios[i] = this.api[i].nomeMedicamento
      }
      
      this.listaRemedios.forEach(element => {
        console.log(element)
      });

    })
  }

    adicionarRemedio(){

      if (this.switch == true) {
        this.quantidade_pilulas = 0;
      }

      let remedio = {
        nomeMedicamento: this.nomeMedicamento,
        intervaloH: this.intervaloH,
        qntdPilula: this.quantidade_pilulas,
        liquido: this.switch
      };
      
      this.httpClient.post(`http://localhost:4000/novoMedicamento/`, remedio).subscribe(
        resultado => {
          console.log(resultado);
        },
        erro => {
          console.log(erro);
        }
      );
    }

}

