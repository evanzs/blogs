import { Column, Entity } from "typeorm";
import EntidadeBase from "./EntidadeBase";

@Entity('respostas')
export  default class Resposta  extends EntidadeBase{
    @Column()
    id_usuario:string

    @Column()
    id_topico:string

    @Column()
    texto:string
}