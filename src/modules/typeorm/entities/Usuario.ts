import { Column, Entity } from "typeorm";
import EntidadeBase from "./EntidadeBase";

@Entity('usuarios')
export default class Usuario  extends EntidadeBase{

    @Column()
    nome:string   

    @Column()
    foto:string

    @Column()
    telefone:string   

    @Column()
    email:string

    @Column()
    cpfCnpj:string

    @Column()
    tipo:string   

    @Column()
    senha:string
}