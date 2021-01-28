const {Model, DataTypes, Sequelize} = require('sequelize')
const path = require('path')
const connectionSettings = {
    test: {dialect: 'sqlite', storage: 'sqlite::memory:'},
    dev: {dialect: 'sqlite', storage: path.join(__dirname, 'data.db')},
    production: {dialect: 'postgres', protocal: 'postgres'}
}
const sequelize = process.env.NODE_ENV === 'production'
    ? new Sequelize(process.env.DATABASE_URL, connectionSettings[process.env.NODE_ENV])
    : new Sequelize(connectionSettings[process.env.NODE_ENV])

class UserMetadata extends Model {}

UserMetadata.init({
    sub: DataTypes.STRING,
    balance: DataTypes.FLOAT,
}, {sequelize: sequelize})

class Transaction extends Model {}

Transaction.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    amount: DataTypes.FLOAT
}, {sequelize: sequelize})

class Friends extends Model {}
Friends.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
}, {sequelize: sequelize})

UserMetadata.hasMany(Transaction)
UserMetadata.hasMany(Friends)

module.exports = {
    UserMetadata, sequelize, Transaction, Friends
}
