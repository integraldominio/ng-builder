# Ngbuilder - Gerador de crud (Estudo)

Usar code template como técnca para gerar crud Angular usando EJS.

## Instalar EJS

```
 npm i ejs
```

```
angular.json

 "scripts": [
              "node_modules/ejs/ejs.js"
            ]
```

## Exemplo

```javascript
app.component.ts

import { Component } from '@angular/core';

declare var  ejs: any;

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
            <%=f.name%> = <%=f.type%> ,
          <% }) %>

          ou assim:  

          <% artefato.fields.forEach(function(f){ %>
            <%=f.name%> = <%=f.type%> ,
          <% }); %>

        } `;

  processTemp() {
   this.tempProcessada = ejs.render( this.tplService, {artefato: this.artefato});
  }

}
```

## Tutorial do EJS

### Opções

* cache Compiled functions are cached, requires filename
* filename Used by cache to key caches
* scope Function execution context
* debug Output generated function body
* compileDebug When false no debug instrumentation is compiled
* client Returns standalone compiled function
* open Open tag, defaulting to "<%"
* close Closing tag, defaulting to "%>"
* All others are template-local variables

### IF

``` 

<% if (user) { %>
    <h2><%= user.name %></h2>
<% } %>

```

### Includes

``` 
<ul>
  <% users.forEach(function(user){ %>
    <% include user/show %>
  <% }) %>
</ul>
```

### Custom delimiters

```
var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';
```

```
<h1>{{= title }}</h1>
```

### Filters

```
template

<p><%=: users | map:'name' | join %></p>
```

```
output

<p>Tj, Mape, Guillermo</p>
```
```
Render call:

ejs.render(str, {
    users: [
      { name: 'tj' },
      { name: 'mape' },
      { name: 'guillermo' }
    ]
});
```

Captalize:
```
<p><%=: users | first | capitalize %></p>
```

### Filter List

* first
* last
* capitalize
* downcase
* upcase
* sort
* sort_by:'prop'
* size
* length
* plus:n
* minus:n
* times:n
* divided_by:n
* join:'val'
* truncate:n
* truncate_words:n
* replace:pattern,substitution
* prepend:val
* append:val
* map:'prop'
* reverse
* get:'prop'

### Adding filters

```
<% include head %>
<h1>Title</h1>
<p>My page</p>
<% include foot %>
```



## Referências

* https://www.javascripting.com/view/ejs
* http://ejs.co/#install
* http://www.embeddedjs.com/getting_started.html
* http://www.embeddedjs.com/
* https://www.devpleno.com/html-estatico-com-templates-ejs/

## Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
