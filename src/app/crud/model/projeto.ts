import { Artefato } from './Artefato';
export class Projeto {
  id: number;
  nome: string;
  descricao: string;
  localGeracaoApp: string;
  nomeApp: string;
  nomeReduzidoApp: string;
  iconeApp: string;
  backgroudApp: string;
  serverPort: string;
  frontPort: string;
  artefatos: Array<Artefato>;
}
