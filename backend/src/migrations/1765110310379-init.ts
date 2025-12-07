import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1765110310379 implements MigrationInterface {
    name = 'Init1765110310379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "episode" ("id" SERIAL NOT NULL, "itunesId" bigint, "title" character varying NOT NULL, "collectionName" character varying NOT NULL, "description" text, "image" character varying NOT NULL, "audioUrl" character varying NOT NULL, "releaseDate" character varying NOT NULL, "itunesCollectionId" character varying NOT NULL, "duration" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7258b95d6d2bf7f621845a0e143" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "podcast" ("id" SERIAL NOT NULL, "itunesId" bigint, "title" character varying NOT NULL, "artist" character varying NOT NULL, "image" character varying, "collectionViewUrl" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8938ce8558ac308bea99f4360e2" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "podcast"`);
        await queryRunner.query(`DROP TABLE "episode"`);
    }

}
