const { Sequelize } = require("sequelize");

async function up({ context: queryInterface }) {
	await queryInterface.createTable('myinfos', {
		usrid: {
			type: Sequelize.INTEGER,
			allowNull: false,
			primaryKey: true,
      autoIncrement:true
		},
		name: {
			type: Sequelize.STRING
		},
		email:{
      type: Sequelize.STRING
    }
	});
}

async function down({ context: queryInterface }) {
	await queryInterface.dropTable('myinfos');
}

module.exports = { up, down };