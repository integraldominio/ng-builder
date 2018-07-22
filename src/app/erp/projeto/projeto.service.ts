import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../../infra/security';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService extends ResourceService<Projeto> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'projetos',
      messageService);
  }
}

export class Projeto {
  id: number;
  nome: string;
  descricao: string;
  serverHost: string;
  serverPort: number;
  frontHost: string;
  frontPort: number;
  nomeBackendApp: string;
  nomeFrontEndApp: string;
}

 

// usando json-server
// npm install -g json-server
// json-server --watch db.json
