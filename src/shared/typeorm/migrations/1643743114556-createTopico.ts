import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";
import { TableForeignKey } from "typeorm/schema-builder/table/TableForeignKey";

export class createTopico1643743114556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'topicos',
              columns: [
                {
                  name: 'id',
                  type: 'uuid',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'id_pai',
                  type: 'uuid',
                  isPrimary: true,                              
                },
                {
                    name: 'id_usuario',
                    type: 'uuid',
                    isPrimary: true,                                
                },
                {
                  name: 'nome',
                  type: 'varchar',
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
            columnNames: ["id_pai"],
            referencedColumnNames: ["id"],
            referencedTableName: "topicos",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey(
            "topicos", 
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
