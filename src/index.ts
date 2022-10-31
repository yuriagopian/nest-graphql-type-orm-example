import { AppDataSource } from "./db/data-source"

AppDataSource.initialize().then(async () => {

}).catch(error => console.log(error))
