import { Component } from '@angular/core';

declare var  ejs: any;
declare var fs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 artefato = {
  restResource: 'clientes',
  className: 'Cliente',
  fields: [
     { name: 'id', type: 'string'},
     { name: 'nome', type: 'string'},
     { name: 'email', type: 'string'}
 ]};

 tempProcessada = '';
 tplService = `
        import { Injectable } from '@angular/core';
        import { HttpClient, HttpHeaders } from '@angular/common/http';
        import { MessageService, ConfigService, ResourceService } from '../../infra/security';

        @Injectable({
          providedIn: 'root'
        })
        export class <%= artefato.className %>Service extends ResourceService<Cliente> {

          constructor(
            httpClient: HttpClient,
            messageService: MessageService,
            configService: ConfigService
          ) {
              super(
              httpClient,
              configService.getApiUrl(),
              '<%= artefato.restResource %>',
              messageService);
          }
        }

        export class <%= artefato.className %> {

          <% artefato.fields.forEach( f => { %>
            <%=f.name%> : <%=f.type%> ,
          <% }) %>

        } `;

  processTemp() {
     this.tempProcessada = ejs.render( this.tplService, {artefato: this.artefato});
  }

}

