import { Injectable } from '@angular/core';
import Iremedio from './Interfaces/iremedio';
import { AlarmePage } from '../app/alarme/alarme.page';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DadosRemediosService {

  public options: any = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  public dados;
  public api;
  public nomeMedicamentos: string;
  public id: number;
  public remedios: Iremedio[];

  getRemedios() {
    this.httpClient.get('http://localhost:4000/medicamentos/').subscribe((response) => {
      
      this.api = response;

      for (let i = 1; i <= Object.keys(this.api).length; i++) {
        this.id = this.api[i].id;
        this.nomeMedicamentos = this.api[i].nomeMedicamento;
        
        this.remedios[i] = 
          {id:this.api[i].id, nomeMedicamento: this.api[i].nomeMedicamento, intervaloH: this.api[i].intervaloH, qntdPilula: this.api[i].qntdPilula, liquido:this.api[i].liquido} 
      }

    })
  }

  constructor(private httpClient: HttpClient) {
    
  }

  buscarRemedio(): Iremedio[] {
    return this.remedios;
  }




}
