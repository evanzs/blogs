import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";
import { TableForeignKey } from "typeorm/schema-builder/table/TableForeignKey";

export class createResposta1643743121277 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'respostas',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'id_topico',
                  type: 'uuid',
                  isPrimary: true,                            
                },
                {
                    name: 'id_usuario',
                    type: 'uuid',                              
                },               
                {
                    name: 'texto',
                    type: 'varchar',
                  }, 
                {
                  name: 'criado',
                  type: 'timestamp',
                  default: 'now()',
                },
                {
                  name: 'alterado',
                  type: 'timestamp',
                  default: 'now()',
                },   
              ],
            }),
        );
        await queryRunner.createForeignKey(
            "topicos", 
        new TableForeignKey({
            columnNames: ["id_topico"],
            referencedColumnNames: ["id"],
            referencedTableName: "topicos",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey(
            "respostas", 
        new TableForeignKey({
            columnNames: ["id_usuario"],
            referencedColumnNames: ["id"],
            referencedTableName: "usuarios",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
