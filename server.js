const express = require('express')
const app = express()
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { User, Transaction, Friends, sequelize } = require('./models')
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

app.set('view engine', 'handlebars')
app.use(express.json())
app.engine('handlebars', handlebars)
app.use(auth(openIDconfig))

// app.get('/login') this is created by express-openid-connect and displays a login widget
// app.get('/callback') this is created by express-openid-connect and fetches an authenticated user their token
// app.get('/logout') this is created by express-openid-connect and will end a users token based session

app.get('/', async (req, res) => {
    // console.log(req.oidc.user)

    const user = await User.create({email: req.oidc.user.email, name: req.oidc.user.name, balance: 0})
    if (user) {
    res.render('dashboard', {user})
    
    } else {
        res.send("no user")
    }
})


// app.get('/dashboard', (req, res) => {

//     res.render('dashboard', {user})
// })

app.listen(3000, () => {
    sequelize.sync().then(() => console.log("All ready for banking"))
})