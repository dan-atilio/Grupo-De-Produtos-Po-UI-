import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterOutlet, Router } from '@angular/router';

import {
  PoInfoModule,
  PoTableModule,
  PoSearchModule,
  PoTableColumn,
  PoTagType,
  PoTableAction,
  PoButtonGroupModule,
  PoButtonGroupItem,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [PoInfoModule, HttpClientModule, PoTableModule, PoSearchModule, PoButtonGroupModule, RouterOutlet],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {

  //Variáveis que irão definir as colunas e os dados
  public columns: Array<PoTableColumn> = [];
  public items: Array<any> = [];
  public actions: Array<PoTableAction> = [];

  //Botões acima da tabela
  public topButtons: Array<PoButtonGroupItem> = [
    { label: 'Incluir Registro', icon: 'po-icon-plus-circle', action: this.newButton.bind(this) },
    { label: 'Atualizar Browse', icon: 'po-icon-refresh',     action: this.refreshBrowse.bind(this) },
  ];

  //Construtor para criar a conexão HTTP e navegação com Router
  constructor(
    private http: HttpClient,
    private router: Router
  ) {};

  //Na Inicialização da página
  ngOnInit(): void {
    /*
    //Teste abaixo feito para mostrar o Token do Protheus, deixando comentado
    const erpToken = sessionStorage.getItem('ERPTOKEN') ?? '';

    if (sessionStorage.getItem("insideProtheus") == "1") {
      (document.getElementById("obs1") as HTMLInputElement).innerHTML = "Dentro do Protheus";
    }
    else {
      (document.getElementById("obs1") as HTMLInputElement).innerHTML = "Fora do Protheus";
    }
    (document.getElementById("obs2") as HTMLInputElement).innerHTML = erpToken;
    */

    //Aciona para buscar as colunas e os conteúdos delas
    this.columns = this.getColumns();
    this.items   = this.getItems();
    this.actions = this.getActions();

    //Cria na SESSION o código do grupo e a operação
    sessionStorage.setItem("grupoId",   "");
    sessionStorage.setItem("operation", "");
  }

  //Busca as informações das colunas
  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'grupo', width: '8%' },
      { property: 'descricao' },
      { property: 'procedencia', width: '20%' },
      //conforme X3_CBOX do BM_STATUS
      {
        property: 'status',
        type: 'label',
        width: '8%',
        labels: [
          { value: ' ', color: '#745678',           label: 'Não Cadastrado', icon: 'po-icon-exclamation' },
          { value: '1', color: 'blue',              label: 'Novo',           icon: 'po-icon-star-filled' },
          { value: '2', type: PoTagType.Success,    label: 'Remanufaturado', icon: 'po-icon-stock' },
          { value: '3', color: '#d8a20e',           label: 'Reciclado',      icon: 'po-icon-handshake' },
          { value: '4', color: 'rgb(201, 53, 125)', label: 'Usado',          icon: 'po-icon-target' }
        ]
      }
    ];
  }

  //Busca as informações via API
  getItems(): Array<any> {
    var itemsRequest: Array<any> = [];
    var procedencia: string = "";
    
    //Realiza um Get no Protheus para buscar os dados
    this.http.get<any>('/zWsGrpProd/get_all?limit=100', {}).subscribe({
      next: (v) => {

        //Percorre os objetos e vem adicionando no array
        for(var index in v.objects) {

          if (v.objects[index].proori == "1")
            procedencia = "1=Original";
          else if (v.objects[index].proori == "0")
            procedencia = "0=Nao Original";
          else
            procedencia = "";

          itemsRequest.push(
            {
              grupo: v.objects[index].grupo,
              descricao: v.objects[index].desc,
              procedencia: procedencia,
              status: v.objects[index].status
            }
          );

        }
        
      },
      error: (e) => {
        itemsRequest = [];
        console.error("Falha buscar os dados: " + e)
      },
      complete: () => {
        console.log('Busca dos dados completa');
      }

    });

    return itemsRequest;
  }

  //Botões na tabela
  getActions(): Array<PoTableAction> {
    return [
      { label:"Visualizar", icon: "po-icon-eye",    action: this.viewButton.bind(this) },
      { label:"Alterar",    icon: "po-icon-change", action: this.editButton.bind(this) },
      { label:"Excluir",    icon: "po-icon-delete", action: this.deleteButton.bind(this), type: "danger" }
    ]
  }

  //Ação ao clicar no botão Refresh
  refreshBrowse() {
    this.items = this.getItems();
    
    //O trecho abaixo é opcional, esta apenas demonstrando a data e hora ao clicar no botão Refresh
    let dateTime = new Date();
    var messageDate = "Abaixo as informações dos Grupos de Produtos ";

    messageDate += "(atualizado em ";
    messageDate += dateTime.getDay() + "/" + dateTime.getMonth() + "/" + dateTime.getFullYear() + " às ";
    messageDate += dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds();
    messageDate += ")";

    (document.getElementsByClassName("po-info-value")[0] as HTMLInputElement).innerHTML = messageDate;
  }

  //Ação ao clicar no Incluir
  newButton() {
    //console.log("cliquei no Incluir");

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   "");
    sessionStorage.setItem("operation", "3");
    this.router.navigate(['/', 'manipulate']);
  }

  //Ação ao clicar no Visualizar
  viewButton(objectParam:any) {
    var grupoId = objectParam.grupo;

    //console.log("cliquei no Visualizar");
    //console.log("grupo: " + grupoId);

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   grupoId);
    sessionStorage.setItem("operation", "2");
    this.router.navigate(['/', 'manipulate']);
  }

  //Ação ao clicar no Alterar
  editButton(objectParam:any) {
    var grupoId = objectParam.grupo;

    //console.log("cliquei no Alterar");
    //console.log("grupo: " + grupoId);

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   grupoId);
    sessionStorage.setItem("operation", "4");
    this.router.navigate(['/', 'manipulate']);
  }

  //Ação ao clicar no Excluir
  deleteButton(objectParam:any) {
    var grupoId = objectParam.grupo;

    //console.log("cliquei no Excluir");
    //console.log("grupo: " + grupoId);

    //Atualiza a SESSION e aciona a tela de manipulação
    sessionStorage.setItem("grupoId",   grupoId);
    sessionStorage.setItem("operation", "5");
    this.router.navigate(['/', 'manipulate']);
  }

}
