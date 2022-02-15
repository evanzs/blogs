import {MigrationInterface, QueryRunner} from "typeorm";
import { Table } from "typeorm/schema-builder/table/Table";
import { TableForeignKey } from "typeorm/schema-builder/table/TableForeignKey";

export class createSubCategoria1643743106499 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'sub_categorias',
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
                  generationStrategy: 'uuid',                
                },
                {
                  name: 'nome',
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
            "sub_categorias", 
        new TableForeignKey({
            columnNames: ["id_pai"],
            referencedColumnNames: ["id"],
            referencedTableName: "categorias",
            onDelete: "CASCADE"
        }));
    }

    

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
