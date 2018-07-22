import { Component, OnInit } from '@angular/core';
import { ConfiguracaoService, Configuracao } from './configuracao.service';
import { MessageService } from '../../infra/security';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

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
  'nomeEmpresa',
  'siteEmpresa',
  'emailEmpresa',
  'outputDirectory',
  'appProperties',
  ];
  
  dataSource: Array<Configuracao> = [];

  fields: FormlyFieldConfig[] =
  [
   { key: 'nomeEmpresa', type: 'input', templateOptions: { type: 'text', label: 'Nome Empresa', placeholder: 'Informe Nome Empresa', required: true } },
   { key: 'siteEmpresa', type: 'input', templateOptions: { type: 'text', label: 'Site Empresa', placeholder: 'Informe Site Empresa', required: false } },
   { key: 'emailEmpresa', type: 'input', templateOptions: { type: 'text', label: 'Email Empresa', placeholder: 'Informe Email Empresa', required: false } },
   { key: 'outputDirectory', type: 'input', templateOptions: { type: 'text', label: 'Output Directory', placeholder: 'Informe Output Directory', required: false } },
   { key: 'appProperties', type: 'input', templateOptions: { type: 'text', label: 'Application Properties', placeholder: 'Informe Application Properties', required: false } },
  ] ;

  constructor (
    private configuracaoService: ConfiguracaoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.listAll();
  }

  onSubmit(model) {
    if (this.form.valid) {
      this.configuracaoService
        .create( model as Configuracao )
        .subscribe(  _ => { console.log(model); this.listAll(); });
    } else {
      this.messageService.info('Informe corretamente dados obrigatórios.');
    }
  }

  listAll() {
    this.configuracaoService.listAll().subscribe(
      data => {
        this.dataSource  = data as Array<Configuracao>;
        console.log( this.dataSource );
      }
    );
  }

  addNew () {
  }

  startEdit(cliente) {
  }

  deleteItem(o: Configuracao) {
    this.configuracaoService.delete(o.id)
    .subscribe( _ => this.listAll() );
  }
}
