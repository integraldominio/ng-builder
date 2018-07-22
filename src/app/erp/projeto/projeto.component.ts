import { Component, OnInit } from '@angular/core';
import { ProjetoService, Projeto } from './projeto.service';
import { MessageService } from '../../infra/security';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

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
  displayedColumns = [
  'nome',
  'descricao',
  'serverHost',
  'serverPort',
  'frontHost',
  'frontPort',
  'nomeBackendApp',
  'nomeFrontEndApp',
  ];
  
  dataSource: Array<Projeto> = [];

  fields: FormlyFieldConfig[] =
  [
   { key: 'nome', type: 'input', templateOptions: { type: 'text', label: 'Nome', placeholder: 'Informe Nome', required: true } },
   { key: 'descricao', type: 'input', templateOptions: { type: 'text', label: 'Descrição', placeholder: 'Informe Descrição', required: true } },
   { key: 'serverHost', type: 'input', templateOptions: { type: 'text', label: 'Server Host', placeholder: 'Informe Server Host', required: true } },
   { key: 'serverPort', type: 'input', templateOptions: { type: 'text', label: 'Server port', placeholder: 'Informe Server port', required: true } },
   { key: 'frontHost', type: 'input', templateOptions: { type: 'text', label: 'front Host', placeholder: 'Informe front Host', required: true } },
   { key: 'frontPort', type: 'input', templateOptions: { type: 'text', label: 'Front port', placeholder: 'Informe Front port', required: true } },
   { key: 'nomeBackendApp', type: 'input', templateOptions: { type: 'text', label: 'Nome Backend App', placeholder: 'Informe Nome Backend App', required: true } },
   { key: 'nomeFrontEndApp', type: 'input', templateOptions: { type: 'text', label: 'Nome Frontend App', placeholder: 'Informe Nome Frontend App', required: true } },
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

  deleteItem(o: Projeto) {
    this.projetoService.delete(o.id)
    .subscribe( _ => this.listAll() );
  }
}
