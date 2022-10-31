import "reflect-metadata"
import { DataSource } from "typeorm"
import * as path from 'path';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: 'data/journal.db',
    logging: true,
    entities: [path.resolve(__dirname,  'models', '*')],
    migrations: [path.resolve(__dirname, 'migrations', '*')],
})
