import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterOutlet, Router } from '@angular/router';

import {
  PoInfoModule,
  PoButtonGroupModule,
  PoButtonGroupItem,
  PoFieldModule,
  PoNotificationService
} from '@po-ui/ng-components';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manipulate',
  standalone: true,
  imports: [PoInfoModule, PoButtonGroupModule, HttpClientModule, RouterOutlet, PoFieldModule, FormsModule],
  templateUrl: './manipulate.component.html',
  styleUrl: './manipulate.component.css',
  providers: [PoNotificationService]
})
export class ManipulateComponent {
  private grupoId   : string = "";
  private operation : string = "";

  public observacao : string = "Abaixo revise os campos informados e depois efetive clicando no botão Confirmar";

  //Conteúdo dos campos
  public bmGrupo : string = "";
  public bmDesc : string = "";
  public bmProOri : string = "";
  public bmStatus : string = "";
  public bmMargPre : number = 0;
  public bmDtUMov : string = "";

  //Botões acima dos campos
  public actionButtons: Array<PoButtonGroupItem> = [
    { label: 'Cancelar',  icon: 'po-icon-close', action: this.cancelButton.bind(this) }
  ];

  //Construtor para criar a conexão HTTP e navegação com Router
  constructor(
    private http: HttpClient,
    private router: Router,
    private poNotification: PoNotificationService
  ) {};

  //Na Inicialização da página
  ngOnInit(): void {
    //Teste abaixo feito para mostrar o grupo e operação
    this.grupoId   = sessionStorage.getItem('grupoId') ?? '';
    this.operation = sessionStorage.getItem('operation') ?? '';

    /*
    //Teste abaixo feito para mostrar o grupo e operação
    (document.getElementById("m_obs1") as HTMLInputElement).innerHTML = "Grupo: " + this.grupoId;
    (document.getElementById("m_obs2") as HTMLInputElement).innerHTML = "Operação: " + this.operation;
    */

    //Adiciona no texto de observação qual é a operação usada
    if (this.operation == "3")
      this.observacao += " (Inclusão de Registro)";
    else if (this.operation == "4")
      this.observacao += " (Alteração de Registro)";
    else if (this.operation == "5")
      this.observacao += " (Exclusão de Registro)";
    else if (this.operation == "2")
      this.observacao += " (Visualização de Registro)";

    //Somente vai ter o botão de Confirmar, caso não seja visualização
    if (this.operation != "2")
      this.actionButtons.push({ label: 'Confirmar', icon: 'po-icon-ok',    action: this.confirmButton.bind(this), selected: true });

    //Se não for inclusão, vai buscar os dados
    if (this.operation != "3") {
      //Atualiza os campos na tela
      this.bmGrupo = this.grupoId;

      //Realiza um Get no Protheus para buscar os campos desse id
      this.http.get<any>('/zWsGrpProd/get_id?id=' + this.grupoId, {}).subscribe({
        next: (v) => {
          this.bmDesc = v.desc;
          this.bmProOri = v.proori;
          this.bmStatus = v.status;
          this.bmMargPre = v.margpre;
          this.bmDtUMov = this.formatDate(v.dtumov);
        },
        error: (e) => {
          console.error("Falha buscar os dados: " + e)
        },
        complete: () => {
          console.log('Busca dos dados completa');
        }

      });
    }

    //Define a duração das mensagens (em milissegundos)
    this.poNotification.setDefaultDuration(4000);
  }

  //Botão de Confirmar
  confirmButton() {
    //Mensagem de teste para mostrar o que o usuário digitou
    /*
    alert(
      this.bmGrupo + "\n"  +
      this.bmDesc + "\n" +
      this.bmProOri + "\n" +
      this.bmStatus + "\n" +
      this.bmMargPre+ "\n" +
      this.bmDtUMov
    );*/

    //Monta o Body da requisição
    var httpBody = {
      "grupo": this.bmGrupo,
      "desc": this.bmDesc,
      "status": this.bmStatus,
      "proori": this.bmProOri,
      "margpre": this.bmMargPre,
      "dtumov": this.bmDtUMov
    };

    //Se for inclusão
    if (this.operation == "3") {

      //Realiza um Post para incluir no Protheus
      this.http.post<any>('/zWsGrpProd/new', httpBody, {}).subscribe({
        next: (v) => {
          this.poNotification.success('Grupo incluído com sucesso!');
          this.router.navigate(['/', 'browse']);
        },
        error: (e) => {
          this.poNotification.error('Falha na inclusão!');
          console.error("Falha na gravação: " + e)
        },
        complete: () => {
          console.log('Busca dos dados completa');
        }

      });
    }
    //Senão se for alteração
    else if (this.operation == "4") {
      //Realiza um Put para alterar no Protheus
      this.http.put<any>('/zWsGrpProd/update?id=' + this.grupoId, httpBody, {}).subscribe({
        next: (v) => {
          this.poNotification.success('Grupo alterado com sucesso!');
          this.router.navigate(['/', 'browse']);
        },
        error: (e) => {
          this.poNotification.error('Falha na alteração!');
          console.error("Falha na gravação: " + e)
        },
        complete: () => {
          console.log('Busca dos dados completa');
        }

      });
    }
    //Senão se for exclusão
    else if (this.operation == "5") {
      //Realiza um Delete para exclusão no Protheus
      this.http.delete<any>('/zWsGrpProd/erase?id=' + this.grupoId, {}).subscribe({
        next: (v) => {
          this.poNotification.success('Grupo excluído com sucesso!');
          this.router.navigate(['/', 'browse']);
        },
        error: (e) => {
          this.poNotification.error('Falha na exclusão, verifique se existem produtos vinculados a esse Grupo!');
          console.error("Falha na gravação: " + e)
        },
        complete: () => {
          console.log('Busca dos dados completa');
        }

      });
    }
  }

  //Botão de Cancelar
  cancelButton() {
    this.router.navigate(['/', 'browse']);
  }

  //Ao alterar o combo de Procedência Original
  onChangeProOri(optionId: string) {
    this.bmProOri = optionId;
  }

  //Ao alterar o combo de Status do Grupo
  onChangeStatus(optionId: string) {
    this.bmStatus = optionId;
  }

  //Formata a data de YYYYMMDD para YYYY-MM-DD
  formatDate(s: string) {
    s = s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    return s;
  }
}
