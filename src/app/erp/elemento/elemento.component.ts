import { Component, OnInit } from '@angular/core';
import { ElementoService, Elemento } from './elemento.service';
import { MessageService } from '../../infra/security';
import { FormGroup} from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-elemento',
  templateUrl: './elemento.component.html',
  styleUrls: ['./elemento.component.css']
})
export class ElementoComponent implements OnInit {

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
  'rotulo',
  'inicial',
  'mascara',
  'pipe',
  'dica',
  'tamanho',
  'Decimais',
  'tipoElemento',
  'tipoField',
  ];
  
  dataSource: Array<Elemento> = [];

  fields: FormlyFieldConfig[] =
  [
   { key: 'nome', type: 'input', templateOptions: { type: 'text', label: 'Nome', placeholder: 'Informe Nome', required: true } },
   { key: 'rotulo', type: 'input', templateOptions: { type: 'text', label: 'Rótulo', placeholder: 'Informe Rótulo', required: true } },
   { key: 'inicial', type: 'input', templateOptions: { type: 'text', label: 'Valor Inicial', placeholder: 'Informe Valor Inicial', required: false } },
   { key: 'mascara', type: 'input', templateOptions: { type: 'text', label: 'Máscara Edição', placeholder: 'Informe Máscara Edição', required: false } },
   { key: 'pipe', type: 'input', templateOptions: { type: 'text', label: 'Máscara Display', placeholder: 'Informe Máscara Display', required: false } },
   { key: 'dica', type: 'input', templateOptions: { type: 'text', label: 'Hint(dica)', placeholder: 'Informe Hint(dica)', required: false } },
   { key: 'tamanho', type: 'input', templateOptions: { type: 'text', label: 'Tamanho', placeholder: 'Informe Tamanho', required: true } },
   { key: 'Decimais', type: 'input', templateOptions: { type: 'text', label: 'Deciamais', placeholder: 'Informe Deciamais', required: true } },
   { key: 'tipoElemento', type: 'input', templateOptions: { type: 'text', label: 'Tipo Elemento', placeholder: 'Informe Tipo Elemento', required: true } },
   { key: 'tipoField', type: 'input', templateOptions: { type: 'text', label: 'Tipo Field', placeholder: 'Informe Tipo Field', required: true } },
  ] ;

  constructor (
    private elementoService: ElementoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.listAll();
  }

  onSubmit(model) {
    if (this.form.valid) {
      this.elementoService
        .create( model as Elemento )
        .subscribe(  _ => { console.log(model); this.listAll(); });
    } else {
      this.messageService.info('Informe corretamente dados obrigatórios.');
    }
  }

  listAll() {
    this.elementoService.listAll().subscribe(
      data => {
        this.dataSource  = data as Array<Elemento>;
        console.log( this.dataSource );
      }
    );
  }

  addNew () {
  }

  startEdit(cliente) {
  }

  deleteItem(o: Elemento) {
    this.elementoService.delete(o.id)
    .subscribe( _ => this.listAll() );
  }
}
