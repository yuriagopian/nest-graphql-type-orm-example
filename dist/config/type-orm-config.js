"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const data_source_1 = require("typeorm/data-source");
const path = require("path");
exports.connectionSource = new data_source_1.DataSource({
    type: 'sqlite',
    database: 'data/rocketseat.db',
    logging: true,
    entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
    migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
});
exports.connectionSource.initialize();
//# sourceMappingURL=type-orm-config.js.map