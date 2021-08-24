import { Tema } from "./Tema"
import { User } from "./User"


export class Postagem {
  public id: number;
  public titulo: string;
  public texto: string;
  public curtidas: number;
  public agenda: string;
  public contato: string;
  public fotoPostagem: string;
  public tema: Tema;
  public usuario: User;
  public data: Date;
  

}