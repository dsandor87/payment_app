const express = require('express')
const app = express()
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { sequelize } = require('./models')
const { auth } = require('express-openid-connect')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

const openIDconfig = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env that you make up',
    baseURL: 'http://localhost:3000',
    clientID: 'dFHtLvHeKYiczIEE5nRPltX3W4Fawntl',
  issuerBaseURL: 'https://dev-yb35qxkb.eu.auth0.com'}

app.use(express.json())
app.engine('handlebars', handlebars)
app.use(auth(openIDconfig))

// app.get('/login') this is created by express-openid-connect and displays a login widget
// app.get('/callback') this is created by express-openid-connect and fetches an authenticated user their token
// app.get('/logout') this is created by express-openid-connect and will end a users token based session

app.get('/', (req, res) => {
    if (req.oidc.user) {
    res.redirect('/dashboard')
    } else {
        res.send("no user")
    }
})

app.get('/dashboard', (req, res) => {
    const user = req.oidc.user
    res.render('dashboard', {user})
})

app.listen(3000, () => {
    sequelize.sync().then(() => console.log("All ready for banking"))
})