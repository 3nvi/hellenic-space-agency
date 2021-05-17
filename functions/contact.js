const nodemailer = require('nodemailer');
const { OAuth2 } = require('googleapis');

const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

exports.handler = function(event, context, callback) {
  if (event.httpMethod !== 'POST') {
    return callback(null, { statusCode: 405, body: 'Method Not Allowed' });
  }

  const oauth2Client = new OAuth2(
    process.env.MAILING_SERVICE_CLIENT_ID,
    process.env.MAILING_SERVICE_CLIENT_SECRET,
    OAUTH_PLAYGROUND
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.MAILING_SERVICE_REFRESH_TOKEN,
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.CONTACT_EMAIL,
      clientId: process.env.MAILING_SERVICE_CLIENT_ID,
      clientSecret: process.env.MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: process.env.MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: oauth2Client.getAccessToken(),
    },
  });

  const { email, subject, body } = JSON.parse(event.body);
  transporter.sendMail(
    {
      from: process.env.CONTACT_EMAIL,
      to: process.env.DESTINATION_EMAILS,
      subject: `Contact form submission from ${email}: ${subject}`,
      text: body,
    },
    function(error) {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: 'Ok',
        });
      }
    }
  );
};
