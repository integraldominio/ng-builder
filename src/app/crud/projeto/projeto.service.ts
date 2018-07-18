import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../../infra/security';
import { Projeto } from '../model/projeto';
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
// usando json-server
// npm install -g json-server
// json-server --watch db.json
