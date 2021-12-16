import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-meus-alarmes',
  templateUrl: './meus-alarmes.page.html',
  styleUrls: ['./meus-alarmes.page.scss'],
})


export class MeusAlarmesPage {

  public api;
  public listaRemedios = [];
  public idRemedio;
  public nomeMedicamento: string;
  public intervaloH: number;
  public switch = false;
  public quantidade_pilulas = 0;


  constructor(public httpClient: HttpClient, public alertController: AlertController) {
    //Ao entrar na página, sempre será mostrado a lista de remédio
    this.listarRemedios();
  }



  async listarRemedios() {
    //Fazendo uma requisição do body da nossa API criada
    this.httpClient.get('http://localhost:4000/medicamentos/').subscribe((response) => {
      //Passando o body (a api) para uma variável
      this.api = response;
      //Passando para a variável, a quantidade de elementos dentro da API
      let qntdApi = Object.keys(this.api).length;

      //Percorrendo pelos itens da API para adicioná-los na lista.
      for (let i = 0; i < qntdApi; i++) {
        this.listaRemedios[i] = this.api[i]
      }
    })
  }

  async buscarRemedio(id: number) {
    //Fazendo uma requisição do body da nossa API criada
    this.httpClient.get(`http://localhost:4000/medicamentos/${id}`).subscribe((response) => {
      //Passando o body (a api) para uma variável
      this.api = response;
      //Passando para a variável, a quantidade de elementos dentro da API

    });
    return String(this.api[0].nomeMedicamento);
  }



  async deletarRemedio(id: number) {
    this.httpClient.delete(`http://localhost:4000/removerMedicamento/${id}`).subscribe((response) => {
      alert(response);
    },
      erro => {
        console.log(erro);
      });

    this.listarRemedios();
  }

  atualizarRemedio(id: number) {

    let remedio = {
      nomeMedicamento: this.nomeMedicamento.toUpperCase(),
      intervaloH: this.intervaloH,
      qntdPilula: this.quantidade_pilulas,
      liquido: this.switch
    };


    this.httpClient.put(`http://localhost:4000/atualizarMedicamento/${id}`, remedio).subscribe(
      resultado => {
        console.log(resultado);
      },
      erro => {
        console.log(erro);
      }
    );
  }

  async entradaAtualizacao(id: number) {
    const alert = await this.alertController.create({
      cssClass: 'alertaAtualizar',
      header: 'Editar Alarme',
      inputs: [
        {
          name: 'nomeMedicamento',
          type: 'text',
          placeholder: 'Nome do medicamento'
        },
        {
          name: 'intervaloH',
          type: 'number',
          placeholder: 'Intervalo/H entre as doses',
        },
        {
          name: 'qntdPilula',
          type: 'number',
          placeholder: 'Quantidade de pílulas'
        },
        {
          placeholder: 'Líquido?'
        },
        {
          name: 'radio1',
          type: 'checkbox',
          handler: () => {
            console.log('Radio 1 selected');
          },
          checked: false,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Salvar',
          handler: salvar => {
            this.nomeMedicamento = salvar.nomeMedicamento;
            this.nomeMedicamento.toUpperCase();
            this.intervaloH = salvar.intervaloH;

            if (salvar.radio1 == 'on') {
              this.quantidade_pilulas = 0;
              this.switch = true;
            } else {
              this.quantidade_pilulas = salvar.qntdPilula;
              this.switch = false;
            }

            this.atualizarRemedio(id);
            location.reload();
          },
        },
      ]
    });

    await alert.present();
  }



}
