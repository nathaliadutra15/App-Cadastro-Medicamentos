import { Component, OnInit } from '@angular/core';

interface IUsuario {
  nome: string;}

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public texto = 'Maria Fernanda Souza';

public pessoa: IUsuario = {
    nome: ' ',
    
  }

  


public switch = true;

public input = '';

inserir(pessoa: string): void {

this.input = '';
}

}


