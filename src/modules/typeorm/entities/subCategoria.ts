import { Column, Entity } from "typeorm"
import EntidadeBase from "./EntidadeBase"

@Entity('sub_categoria')
export  default class SubCategoria  extends EntidadeBase{
    @Column()
    id_pai:string   

    @Column()
    nome:string
}