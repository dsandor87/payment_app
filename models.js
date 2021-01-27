const {Model, DataTypes, Sequelize} = require('sequelize')
const sequelize = new Sequelize("sqlite:./db.sql", {logging: false})

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    balance: DataTypes.FLOAT,
    friends: DataTypes.ARRAY,
}, {sequelize: sequelize})

module.exports = {
    User, sequelize
}
