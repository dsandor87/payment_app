const nodemailer = require('nodemailer')
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}



class Mailer {
    static sent = []
    constructor(from) {
        this.from = from
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mvers0001@gmail.com',
                pass: process.env.GMAIL_PASSWORD
            }
        })
    }

    sendEmailInvite(to) {
        const email = {
            from: this.from,
            to: to,
            subject: "Friend request",
            html: `Hi there, <br/><br/>I would like you to invite you to be my friend,<br/><br/><a style="" href="${process.env.BASEURL}/friends/accept?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}">Accept Request</a>`,
            replyTo: 'no-reply@banking-app.com'
        }
        this.transport.sendMail(email, (err, result) => {
            Mailer.sent.push(err || result)

        })
    }
}