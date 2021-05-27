const nodemailer = require('nodemailer');
const googleapis = require('googleapis');
const fs = require('fs');
require('dotenv').config();

const Oauth2 = googleapis.google.auth.OAuth2;

const createTransporter = async () => {
    const oauthClient = new Oauth2(
       process.env.G_CLIENT_ID,
       process.env.G_CLIENT_SECRET,
       'https://developers.google.com/oauthplayground'
    );
    oauthClient.setCredentials({refresh_token: process.env.G_REFRESH_TOKEN});    

    console.log(accessToken);
    try{
        const accessToken = await oauthClient.getAccessToken();
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.G_USER,
                accessToken,
                clientId: process.env.G_CLIENT_ID,
                clientSecret: process.env.G_CLIENT_SECRET,
                refreshToken: process.env.G_REFRESH_TOKEN
            }
        });

        return transporter;
    }catch(error){
        console.log(error);
    }
};

const sendEmail = async (options) => {
    try{
        const gmailTransporter = await nodemailer.createTransport();
        gmailTransporter.use('compile', )
        await gmailTransporter.sendMail(options);
    }catch(error){
        console.log(error);
    }
    
}

const data = fs.readFileSync('./lost_password.hrml', {encoding: 'utf8'});

const emailOptions = {
    subject: 'probando el envio de correos',
    html: data,
    to: "inesvanessapcm@gmail.com",
    from: process.env.G_USER
}

/*const emailOptions = {
    subject: 'probando el envio de correos',
    text: 'hola mundo',
    to: "inesvanessapcm@gmail.com",
    from: process.env.G_USER
}*/

sendEmail(emailOptions);
createTransporter();

module.exports = {
    sendEmail,
    emailOptions
}