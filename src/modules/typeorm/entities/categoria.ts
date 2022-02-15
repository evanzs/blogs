import { Column, Entity } from "typeorm";
import EntidadeBase from "./EntidadeBase";

@Entity('categorias')
export default class Categoria  extends EntidadeBase {
    @Column()
    nome: string;   
}