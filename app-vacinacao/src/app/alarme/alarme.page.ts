import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AlertController } from '@ionic/angular';
import { empty } from 'rxjs';

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


  constructor(private httpClient: HttpClient, private localNotifications: LocalNotifications, public alertController: AlertController) {
  }

  async notificarLembrete() {



    this.adicionarRemedio();

    const milissegundo = this.intervaloH * 60000;

    this.localNotifications.schedule({
      text: 'Hora de tomar seu remédio: ' + this.nomeMedicamento,
      title: 'Dr.Lembrete',
      trigger: { at: new Date(new Date().getTime() + milissegundo) },
      led: 'FF0000',
      sound: 'file://resources/audio/beep.mp3'
    });

  }

  async alertaDados() {
    const alert = await this.alertController.create({
      cssClass: 'alertaAtualizar',
      header: 'Informações Pendentes!',
      message: 'Preencha todos os campos.',
      buttons: ['OK'],
    });
  }



  adicionarRemedio() {

    if (this.switch == true) {
      this.quantidade_pilulas = 0;
    }

    let remedio = {
      nomeMedicamento: this.nomeMedicamento.toUpperCase(),
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

