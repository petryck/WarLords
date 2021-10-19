
var nodemailer = require('nodemailer');

// var nodemailer = require('nodemailer');

// var remetente = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   service: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth:{
//   user: 'petryck.leite@conlinebr.com.br',
//   pass: 'hardking99659819' }
//   });


//   function enviar_email(texto){

//     mailOptions = {
//       from: 'no-reply@conlinebr.com.br',
//       to: 'ti@conlinebr.com.br',
//       subject: '[no-reply] - Novo chamado aberto',
//       text: texto
//     };

//     remetente.sendMail(mailOptions, function(error){
//       if (error) {
//       console.log(error);
//       } else {
//       console.log('Email enviado com sucesso.');
//       }
//       });
//   }


module.exports = router;