import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../../infra/security';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracaoService extends ResourceService<Configuracao> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'configuracao',
      messageService);
  }
}

export class Configuracao {
  id: number;
  nomeEmpresa: string;
  siteEmpresa: string;
  emailEmpresa: string;
  outputDirectory: string;
  appProperties: string;
}

 

// usando json-server
// npm install -g json-server
// json-server --watch db.json
