import { DataSource } from 'typeorm';
import * as path from 'path';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'data/journal.db',
        logging: true,
        entities: [path.resolve(__dirname,  'models', '*')],
        migrations: [path.resolve(__dirname, 'migrations', '*')],
      });
      return dataSource.initialize();
    },
  },
];
