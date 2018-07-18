import { Projeto } from './projeto';
import { Elemento } from './elemento';
import { TipoArtefato } from './tipo-artefato';
export class Artefato {
 id: number;
 projeto: Projeto;
 tipoArtefato: TipoArtefato;
 nome: string;
 elementos: Array<Elemento>;
}

