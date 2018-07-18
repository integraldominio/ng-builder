import { Component, OnInit } from '@angular/core';
import { Projeto } from '../model/projeto';
import { ProjetoService } from './projeto.service';
import { MessageService } from '../../infra/security';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {


  // form
  form = new FormGroup({});
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  model = {};

  // table
  displayedColumns = ['id', 'nome', 'telefone', 'email', 'actions'];
  dataSource: Array<Projeto> = [];

  fields: FormlyFieldConfig[] =
  [
    { key: 'nome', type: 'input', templateOptions: { type: 'text', label: 'Nome', placeholder: 'Entre nome', required: true, }},
    { key: 'descricao', type: 'input', templateOptions: { type: 'text', label: 'Descrição', placeholder: 'Entre Descrição', required: false}},
    { key: 'localGeracaoApp', type: 'input', templateOptions: { type: 'text', label: 'local', placeholder: 'Entre local Geracao App', required: true,}},
    { key: 'nomeApp', type: 'input', templateOptions: { type: 'text', label: 'Nome App', placeholder: 'Entre Nome App', required: true}},
    { key: 'nomeReduzidoApp', type: 'input', templateOptions: { type: 'text', label: 'Nome Red.App', placeholder: 'Entre Nome Reduzido App', required: true,}},
    { key: 'serverPort', type: 'input', templateOptions: { type: 'text', label: 'Server Port', placeholder: 'Server Port', required: true,}},
    { key: 'frontPort', type: 'input', templateOptions: { type: 'text', label: 'Front Port', placeholder: 'Front Port', required: true,}}
  ] ;

  constructor (
    private projetoService: ProjetoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.listAll();
  }

  onSubmit(model) {
    if (this.form.valid) {
      this.projetoService
        .create( model as Projeto )
        .subscribe(  _ => { console.log(model); this.listAll(); });
    } else {
      this.messageService.info('Informe corretamente dados obrigatórios.');
    }
  }

  listAll() {
    this.projetoService.listAll().subscribe(
      data => {
        this.dataSource  = data as Array<Projeto>;
        console.log( this.dataSource );
      }
    );
  }

  addNew () {
  }

  startEdit(cliente) {
  }

  deleteItem(cliente: Projeto) {
    this.projetoService.delete(cliente.id)
    .subscribe( _ => this.listAll() );
  }
}
