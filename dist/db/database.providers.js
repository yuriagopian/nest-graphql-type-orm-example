"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const path = require("path");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'sqlite',
                database: 'data/journal.db',
                logging: true,
                entities: [path.resolve(__dirname, 'models', '*')],
                migrations: [path.resolve(__dirname, 'migrations', '*')],
            });
            dataSource.runMigrations();
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map