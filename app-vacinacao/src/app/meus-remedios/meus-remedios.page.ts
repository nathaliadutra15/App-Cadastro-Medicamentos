import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Iremedio from '../Interfaces/iremedio';
import { DadosRemediosService } from '../dados-remedios.service';


@Component({
  selector: 'app-meus-remedios',
  templateUrl: './meus-remedios.page.html',
  styleUrls: ['./meus-remedios.page.scss'],
})
export class MeusRemediosPage implements OnInit {
  public rota: ActivatedRoute;
  public id: number;
  public dados: Iremedio[];
  public remedio: Iremedio;
  public servico: DadosRemediosService;

  constructor(route: ActivatedRoute, dadosServico: DadosRemediosService) {
    this.rota = route;
    this.servico = dadosServico;
    this.dados = this.servico.buscarRemedio();

   }

  ngOnInit() {
    this.id = Number(this.rota.snapshot.paramMap.get('id'));
    this.remedio = this.dados.find(p => p.id === this.id);
  }

}
