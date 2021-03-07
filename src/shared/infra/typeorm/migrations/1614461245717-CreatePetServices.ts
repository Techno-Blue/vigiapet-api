import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreatePetServices1614461245717
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'petServices',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'userService_id',
            type: 'uuid',
          },
          {
            name: 'pet_id',
            type: 'uuid',
          },
          {
            name: 'value',
            type: 'money',
          },
          {
            name: 'deliver',
            type: 'boolean',
          },
          {
            name: 'observation',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'formPayment',
            type: 'smallint',
            isNullable: true,
          },
          {
            name: 'changeValue',
            type: 'money',
            isNullable: true,
          },
          {
            name: 'numberInstallment',
            type: 'smallint',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'petServices',
      new TableForeignKey({
        name: 'PetServicesUserServices',
        columnNames: ['userService_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'userServices',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'petServices',
      new TableForeignKey({
        name: 'PetServicesPets',
        columnNames: ['pet_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pets',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('petServices', 'PetServicesUserServices');
    await queryRunner.dropForeignKey('petServices', 'PetServicesPets');
    await queryRunner.dropTable('petServices');
  }
}
