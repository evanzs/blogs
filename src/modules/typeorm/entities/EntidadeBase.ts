import { BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('EntidadeBase')
export default class EntidadeBase {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    criado: Date;

    @CreateDateColumn()
    alterado: Date;
}




