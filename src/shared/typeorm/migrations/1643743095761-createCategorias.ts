import { MigrationInterface, QueryRunner } from 'typeorm';
import { Table } from 'typeorm/schema-builder/table/Table';

export class createCategorias1643743095761 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categorias',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
