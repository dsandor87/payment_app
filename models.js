const {Model, DataTypes, Sequelize, Transaction} = require('sequelize')
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

Transaction.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    amount: DataTypes.FLOAT
})

module.exports = {
    User, sequelize, Transaction
}
