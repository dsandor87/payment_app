const express = require('express')
const app = express()
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars')
const { UserMetadata, Transaction, Friends, sequelize } = require('./models')
const { auth, requiresAuth } = require('express-openid-connect')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const {Mailer} = require('./mailer')


const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const openIDconfig = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH_SECRET,
    baseURL: process.env.BASE_URL,
    clientID: process.env.AUTH_CLIENT_ID,
  issuerBaseURL: 'https://dev-yb35qxkb.eu.auth0.com'}

app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', handlebars)
app.use(auth(openIDconfig))


// app.get('/login') this is created by express-openid-connect and displays a login widget
// app.get('/callback') this is created by express-openid-connect and fetches an authenticated user their token
// app.get('/logout') this is created by express-openid-connect and will end a users token based session

app.get('/', requiresAuth(), async (req, res) => {
    if (req.oidc.user) {
    const user = req.oidc.user
    console.log(user)
    let doesUserExist = await UserMetadata.findOne({where: { sub: user.sub}})
    if (doesUserExist === null){
    doesUserExist = await UserMetadata.create({name: user.name, sub: user.sub, balance: 0})
    }
    userMetadata = doesUserExist
    const userMetadataList = await UserMetadata.findAll()
    
    res.render('dashboard', {userMetadata ,user, userMetadataList})
    }
})

app.get('/addfunds/:id', async (req, res)=> {
    const userMetadata = await UserMetadata.findOne({where: { id: req.params.id}})
    const friends = await Friends.findAll({where: {UserMetadatumId: userMetadata.id}})
    res.render('addfunds', {userMetadata, friends})
})


app.post('/addfunds/:id', async (req, res) => {
    const userMetadata = await UserMetadata.findOne({where: { id: req.params.id}})
    const user = await UserMetadata.findOne({where: { sub: userMetadata.sub}})
    const value = parseInt(req.body.value, 10) + userMetadata.balance
    console.log(req.body)
    await userMetadata.update({balance: value})
    res.redirect('/')
})

app.get('/friends/invite', requiresAuth(), (req, res) => {
    res.render('friendsinvite')
})

app.get('/friends/accept', requiresAuth(), async (req, res) => {
    let user = await UserMetadata.findOne({where: { email: req.query.to}})
    let friend = await Friends.create({name: user.name, email: req.query.to})
    await userMetadata.addFriends(friend)
    user = await userMetadata.findone({where: { email: req.query.from}})
    friend = await Friends.create({name: user.name, email: req.query.from})
    await userMetadata.addFriends(friend)
    res.render('dashboard')
})

app.post('/friends/invite', requiresAuth(), (req, res) => {
    const email = req.body.email
    const mailer = new Mailer(req.oidc.user.email)
    mailer.sendEmailInvite(email)
    res.sendStatus(201)
})

app.listen(process.env.PORT || 3000, () => {
    sequelize.sync(() => {
        console.log('Kanban app running on port', process.env.PORT)
    })
})