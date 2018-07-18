import { Artefato } from './artefato';
import { TipoElemento } from './tipo-elemento';
import { TipoField } from './tipo-field';

export class Elemento {
  id: number;
  artefato: Artefato;
  tipoElemento: TipoElemento;
  tipoField: TipoField;
  name: string;
  llabel: string;
  mask: string;
  pipe: string;
  hint: string;
}
