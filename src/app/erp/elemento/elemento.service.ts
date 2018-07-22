import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService, ConfigService, ResourceService } from '../../infra/security';

@Injectable({
  providedIn: 'root'
})
export class ElementoService extends ResourceService<Elemento> {

  constructor(
    httpClient: HttpClient,
    messageService: MessageService,
    configService: ConfigService
  ) {
      super(
      httpClient,
      configService.getApiUrl(),
      'elementos',
      messageService);
  }
}

export class Elemento {
  id: number;
  nome: string;
  rotulo: string;
  inicial: string;
  mascara: string;
  pipe: string;
  dica: string;
  tamanho: number;
  Decimais: number;
  tipoElemento: string;
  tipoField: string;
}

 

// usando json-server
// npm install -g json-server
// json-server --watch db.json
