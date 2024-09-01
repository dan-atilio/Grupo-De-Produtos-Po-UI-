import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    HttpClientModule,
    ProtheusLibCoreModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  constructor(private proAppConfigService: ProAppConfigService, private router: Router) {
    if (! this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem("insideProtheus", "0");
      sessionStorage.setItem("ERPTOKEN", '{"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6ImRhbmllbC5hdGlsaW8iLCJpYXQiOjE3MjI5NDIwMTgsInVzZXJpZCI6IjAwMDAwMyIsImV4cCI6MTcyMjk0NTYxOCwiZW52SWQiOiJQUk9USEVVUyJ9.BAHBN2yYwJ8MBtLa8KYMA3K6q73zRuLognoLP42OiebwzmWQdhdgeTrcLgROiJ7ygtHSFFswa2EXRTEIeH87FZfZOr-OztVtNNch0QXl9E2575vqBFJAdfWgcqBzjfYcVrHvrAU2lfrlYqWt88VHhe4_7cZEsP0pJuHDbPa_w4nvORNVipKCiO0bAZhysJbpi2pJ67IjFIaE5PM6YuZmpbYsRyAj4eJ9ZkFdGO7DxYI5V5ENftyBKOYprwbCt0XlNxcF2bkZsnU8McPXWBBi-fvx-t6FaVuvOMQVwY8bq7495j8cryNY4iF5u_HrufoFvfe9uhNX83971n04LkUjQw","refresh_token": "ebbLIvUOXDSG-NQizmlBzUEB.bqXuLtkjSz6F0cNq4H8EgH8484gSk17_1bnm6odXXh0f9CjJAQxZ0pBqm4_S0wGQKHCpLFnbMygMDi33lMReQObOvwN9jBGmTeC3cYESR_0LYCwYiiLDH9W-fw24qXi7F18F8co866c5KkwOmQVbeX1CF22eVCWT8EmjRvOF2wp5cIpSyuuuaOnkkNT_3tCziR7KVAET4yHjZ_0qFfw8yzDA.BgC_0FQVaNGIzUpv7cmUBVJI7LU58Oolri7UaqBDFd7jpbtYmyBzY8CxRkTFKITTfZ0vT7xEndkfE7osp_cRfONAfe54hln-3EmrjpZDPCWdg2-N2KP9XDnn8mDNderpxJKO3-fYiPEWVAgH8QUC5EdMmMWggSWFdmmJZNP9-aQ70KbnNeR0TpOg2kLcCGzK9GBILRuFWSD9uqnIBMUJDtw55QkIeRYk2oZK6nlX17SjJd_uK5kcFA7cGSDwK1wQvO0JLKsPa0YhbHrEtKbFH7PLaxoXzi4Jg6xB6n0fqAv0tGxs_1ZlkxUdXel4bc7TDYe8SpiIaw0kSZHFVUIg7A","scope": "default","token_type": "Bearer","expires_in": 3600}');
    }
    else {
      sessionStorage.setItem("insideProtheus", "1");
    }
    
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Cadastro do Grupo', action: this.browseClick.bind(this), icon: 'po-icon-clipboard', shortLabel: 'Cadastro' },
    { label: 'Ajuda (Help)',      action: this.aboutClick.bind(this),  icon: 'po-icon-help',      shortLabel: 'Ajuda' },
    { label: 'Sair',              action: this.closeApp.bind(this),    icon: 'po-icon-exit',      shortLabel: 'Sair' }
  ];


  //Ao clicar no Cadastro
  private browseClick() {
    this.router.navigate(['/', 'browse']);
  }

  //Ao clicar no Sobre
  private aboutClick() {
    this.router.navigate(['/', 'about']);
  }

  //Ao clicar no Sair
  private closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert("Clique não veio do Protheus");
    }
  }

}
