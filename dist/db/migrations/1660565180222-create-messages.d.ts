import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class createMessages1660565180222 implements MigrationInterface {
    private table;
    private foreignKey;
    up(queryRunner: QueryRunner): Promise<any>;
    down(queryRunner: QueryRunner): Promise<any>;
}
