import { Column, Entity } from "typeorm"
import EntidadeBase from "./EntidadeBase"

@Entity('topicos')
export  default class Topico extends EntidadeBase{
    @Column()
    id_pai:string

    @Column()
    id_usuario:string

    @Column()
    nome:string

    @Column()
    texto:string
}