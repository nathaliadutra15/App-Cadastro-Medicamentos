# Parte do Aplicativo de Alarme de Remédios

Este repositório contém as telas que foram criadas por mim durante o projeto proposto na matéria "Computação para Dispositivos Móveis", onde os grupos deveriam elaborar um aplicativo.
O aplicativo foi desenvolvido utilizando o framework Ionic. Para o frontend foi utilizado SCSS para estilizar, HTML e o framework Angular para trazer alguns dados do backend
(*ngFor para listar os itens cadastrados na API e *ngIf que valida se não há registros cadastrados para apresentar uma determinada tela e ngModel para trazer os valores colocados 
no frontend para o backend).

No backend foi utilizado a linguagem Typescript e o Node.JS, onde a [API criada](https://github.com/nathaliadutra15/apiCadastroMedicamentos) está sendo consumida. Também foi trabalhada a tela de alerta utilizando AlertController, para que seja possível realizar a requição do tipo PUT quando o usuário desejar atualizar os dados do remédio. Por fim, foi implementado o uso de notificações locais para os lembretes dos medicamentos cadastrados utilizando o plugin local-notification juntamente com o Cordova.

Veja algumas imagens referente às telas desenvolvidas:

<img src="https://raw.githubusercontent.com/nathaliadutra15/App-Cadastro-Medicamentos/main/Imagens%20do%20Aplicativo/tela-sem-cadastros.PNG"></img>
<img src="https://raw.githubusercontent.com/nathaliadutra15/App-Cadastro-Medicamentos/main/Imagens%20do%20Aplicativo/tela-cadastro.PNG"></img>
<img src="https://raw.githubusercontent.com/nathaliadutra15/App-Cadastro-Medicamentos/main/Imagens%20do%20Aplicativo/tela-com-cadastros.PNG"></img>
<img src="https://raw.githubusercontent.com/nathaliadutra15/App-Cadastro-Medicamentos/main/Imagens%20do%20Aplicativo/alert-para-atualizar.PNG"></img>

O nome do aplicativo é "Dr.Lembrete" e o projeto completo pode ser encontrado neste [repositório](https://github.com/SUELENBOAS/PROJETO-APP).
