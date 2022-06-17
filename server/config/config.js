require('dotenv').config();
const env = process.env;

console.log('process.env.MYSQL_USERNAME : ', env.MYSQL_USERNAME)
console.log('process.env.MYSQL_PASSWORD : ', env.MYSQL_PASSWORD)
console.log('process.env.MYSQL_DATABASE : ', env.MYSQL_DATABASE)
console.log('process.env.MYSQL_HOST : ', env.MYSQL_HOST)

const development = {
    "username": env.MYSQL_USERNAME,
    "password": env.MYSQL_PASSWORD,
    "database": env.MYSQL_DATABASE,
    "host": env.MYSQL_HOST,
    "dialect": "mysql"
  }

const test = {
    "username": env.MYSQL_USERNAME,
    "password": env.MYSQL_PASSWORD,
    "database": env.MYSQL_DATABASE,
    "host": env.MYSQL_HOST,
    "dialect": "mysql"
  }

const production =  {
  "username": env.MYSQL_USERNAME,
  "password": env.MYSQL_PASSWORD,
  "database": env.MYSQL_DATABASE,
  "host": env.MYSQL_HOST,
  "dialect": "mysql"
}

module.exports = { development, production, test };
