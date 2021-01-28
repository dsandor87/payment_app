const express = require('express')
const app = express()
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { UserMetadata, Transaction, Friends, sequelize } = require('./models')
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
    console.log(req.oidc.user)
    const user = req.oidc.user
    let doesUserExist = await UserMetadata.findOne({where: { sub: user.sub}})
    console.log('aihdoaijaodijoawij')
    console.log(doesUserExist)
    if (doesUserExist === null){
    doesUserExist = await UserMetadata.create({sub: user.sub, balance: 0})
    }
    userMetadata = doesUserExist
    console.log(userMetadata)
    if (userMetadata) {
    res.render('dashboard', {userMetadata ,user})
    }
})

app.get('/addfunds/:id', async (req, res)=> {
    const userMetadata = await UserMetadata.findOne({where: { id: req.params.id}})
    res.render('addfunds', {userMetadata})
})


app.post('/addfunds/:id', async (req, res) => {
    const userMetadata = await UserMetadata.findOne({where: { id: req.params.id}})
    const user = await UserMetadata.findOne({where: { sub: userMetadata.sub}})
    const value = req.body.value
    await userMetadata.update({balance: userMetadata.balance + value})
    res.redirect('dashboard', {userMetadata ,user})
})

app.listen(3000, () => {
    sequelize.sync().then(() => console.log("All ready for banking"))
})