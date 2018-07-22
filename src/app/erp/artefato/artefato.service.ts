import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../../infra/security';

@Injectable({
  providedIn: 'root'
})
export class ArtefatoService extends ResourceService<Artefato> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'artefatos',
      messageService);
  }
}

export class Artefato {
  id: number;
  nome: string;
  resourceName: string;
  className: string;
  classFolder: string;
  tmplateTs: string;
  templateHtml: string;
  templateCss: string;
}

 

// usando json-server
// npm install -g json-server
// json-server --watch db.json
