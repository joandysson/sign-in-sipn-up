import {MigrationInterface, QueryRunner, Table, TableCheck} from "typeorm";




export class tableusers1602633569808 implements MigrationInterface {
    private table: string = 'users';

    public async up(queryRunner: QueryRunner): Promise<void> {
        if(await queryRunner.getTable(this.table)){
            await queryRunner.dropTable(this.table);
        }

        await queryRunner.createTable(new Table({
            name: this.table,
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: true
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: 'NOW()'
                },
                {
                    name: "deleted_at",
                    type: "timestamp",
                    isNullable: true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table);
    }
}
