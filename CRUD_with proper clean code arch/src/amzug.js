const { Sequelize } = require("sequelize");
const { Umzug, SequelizeStorage } = require("umzug");

const sequelize = new Sequelize("cruddata", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const umzug = new Umzug({
  migrations: { glob: "migrations/*.js" },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

// Run a specific migration
umzug.up().then(console.log('Migration has been executed.'));


// Down a specific migration
// umzug.Down().then(console.log('Migration has been executed.'));


