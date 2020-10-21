import { Column, MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class tabletokens1602699439372 implements MigrationInterface {
    private table: string = 'tokens';

    public async up(queryRunner: QueryRunner): Promise<void> {
        if(await queryRunner.getTable(this.table)){
            await queryRunner.dropTable(this.table);
        }

        await queryRunner.createTable(new Table(
            {
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
                        name: 'user_id',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: 'token',
                        type: 'text',
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'NOW()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'NOW()'
                    },
                    {
                        name: 'deleted_at',
                        type: 'timestamp',
                        isNullable: true,
                        default: 'NOW()'
                    },
                ]
            }))

            await queryRunner.createForeignKey(this.table, new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE"
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.table)
    }

}
