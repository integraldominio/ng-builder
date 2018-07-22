import { Component, OnInit } from '@angular/core';
import { ArtefatoService, Artefato } from './artefato.service';
import { MessageService } from '../../infra/security';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-artefato',
  templateUrl: './artefato.component.html',
  styleUrls: ['./artefato.component.css']
})
export class ArtefatoComponent implements OnInit {

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
  'resourceName',
  'className',
  'classFolder',
  'tmplateTs',
  'templateHtml',
  'templateCss',
  ];
  
  dataSource: Array<Artefato> = [];

  fields: FormlyFieldConfig[] =
  [
   { key: 'nome', type: 'input', templateOptions: { type: 'text', label: 'Nome', placeholder: 'Informe Nome', required: true } },
   { key: 'resourceName', type: 'input', templateOptions: { type: 'text', label: 'Resource Name', placeholder: 'Informe Resource Name', required: true } },
   { key: 'className', type: 'input', templateOptions: { type: 'text', label: 'Class Name', placeholder: 'Informe Class Name', required: true } },
   { key: 'classFolder', type: 'input', templateOptions: { type: 'text', label: 'Class Folder', placeholder: 'Informe Class Folder', required: true } },
   { key: 'tmplateTs', type: 'input', templateOptions: { type: 'text', label: 'Template Ts', placeholder: 'Informe Template Ts', required: true } },
   { key: 'templateHtml', type: 'input', templateOptions: { type: 'text', label: 'Template Html', placeholder: 'Informe Template Html', required: true } },
   { key: 'templateCss', type: 'input', templateOptions: { type: 'text', label: 'Template Css', placeholder: 'Informe Template Css', required: true } },
  ] ;

  constructor (
    private artefatoService: ArtefatoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.listAll();
  }

  onSubmit(model) {
    if (this.form.valid) {
      this.artefatoService
        .create( model as Artefato )
        .subscribe(  _ => { console.log(model); this.listAll(); });
    } else {
      this.messageService.info('Informe corretamente dados obrigatórios.');
    }
  }

  listAll() {
    this.artefatoService.listAll().subscribe(
      data => {
        this.dataSource  = data as Array<Artefato>;
        console.log( this.dataSource );
      }
    );
  }

  addNew () {
  }

  startEdit(cliente) {
  }

  deleteItem(o: Artefato) {
    this.artefatoService.delete(o.id)
    .subscribe( _ => this.listAll() );
  }
}
