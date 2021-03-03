import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreatePetServiceSteps1614462094112
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'petServiceSteps',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'userServiceStep_id',
            type: 'uuid',
          },
          {
            name: 'petService_id',
            type: 'uuid',
          },
          {
            name: 'status',
            type: 'smallint',
          },
          {
            name: 'observation',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'startDate',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'endDate',
            type: 'timestamp',
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
      'petServiceSteps',
      new TableForeignKey({
        name: 'PetServiceStepsUserServiceSteps',
        columnNames: ['userServiceStep_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'userServiceSteps',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'petServiceSteps',
      new TableForeignKey({
        name: 'PetServiceStepsPetServices',
        columnNames: ['petService_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'petServices',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'petServiceSteps',
      'PetServiceStepsUserServiceSteps',
    );
    await queryRunner.dropForeignKey(
      'petServiceSteps',
      'PetServiceStepsPetServices',
    );
    await queryRunner.dropTable('petServiceSteps');
  }
}
