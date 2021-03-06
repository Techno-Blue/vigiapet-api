import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreatePets1614460798478 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pets',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'breed_id',
            type: 'uuid',
          },
          {
            name: 'petOwner_id',
            type: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'animalSize',
            type: 'smallint',
          },
          {
            name: 'petSex',
            type: 'smallint',
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
      'pets',
      new TableForeignKey({
        name: 'PetsBreeds',
        columnNames: ['breed_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'breeds',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'pets',
      new TableForeignKey({
        name: 'PetsPetOwners',
        columnNames: ['petOwner_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'petOwners',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pets', 'PetsBreeds');
    await queryRunner.dropForeignKey('pets', 'PetsPetOwners');
    await queryRunner.dropTable('pets');
  }
}
