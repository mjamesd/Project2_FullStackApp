const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize('mysql://gs7m8aygxd3kstpx:ykj6ctzh8zsu7vkf@l6glqt8gsx37y4hs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/j2eo83hmfozcrwvh');
} else {
  console.log("Local______________________________________________________")
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
