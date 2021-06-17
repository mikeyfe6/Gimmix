// const sendgrid = require('@sendgrid/mail');

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
// const message = {
//   from: process.env.SENDGRID_AUTHORIZED_EMAIL,
// };
// console.log(message);

// exports.handler = (req, res) => {
//   try {
//     if (req.method !== 'POST') {
//       res.json({ message: 'Try a POST!' });
//     }

//     if (req.body) {
//       message.to = req.body.email;
//       message.subject = req.body.subject;
//       message.text = req.body.text;
//       message.html = req.body.text;
//     }
//     console.log(req.body);

//     return sendgrid.send(message).then(
//       () => {
//         res.status(200).json({
//           message: 'I will send email',
//         });
//       },
//       // eslint-disable-next-line consistent-return
//       (error) => {
//         console.error(error);
//         if (error.response) {
//           return res.status(500).json({
//             error: error.response,
//           });
//         }
//       },
//     );
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: 'There was an error', error: err });
//   }
// };

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (context, event, callback) {
  sgMail.setApiKey(context.SENDGRID_API_KEY);

  const msg = {
    to: event.mail, // Change to your recipient
    from: process.env.SENDGRID_AUTHORIZED_EMAIL, // Change to your verified sender
    subject: event.subject,
    text: event.text,
    html: event.text,
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
  }

  callback(null);
};
