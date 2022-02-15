const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//Crear el servidor
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Habilitar express.json
app.use(express.json({ extended: true }));

//app.use('/api/usuarios', require('./routes/usuarios'))

//Definir la paquina principal
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.post("/api/form", async (req, res) => {
  const { telefono, email, asunto, mensaje, nombre } = req.body;

  console.log(req.body);
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    segure: true,
    auth: {
      user: "maximilianochamarro@gmail.com",
      pass: "ksqnsttsfnqdxsyv",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Papelera El sol" <maximilianochamarro@gmail.com>`, // sender address
      to: email, // list of receivers
      subject: asunto, // Subject line
      text: "Hello world?", // plain text body
      html: `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Telefono: ${telefono}</li>
                <li>Email: ${email}</li>
             </ul>
             <b>${mensaje}</b>`,
    });
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/productoCarrito", async (req, res) => {
  

  const { productosCarrito, totalCompra } = req.body;

  var content = productosCarrito.reduce(function (a, b) {
    return (
      a +
      "<tr><td>" +
      '  ' + b[0].nombre +
      "</td><td>" +
      '$ ' + b[0].precio +
      "</td><td>" +
      '  ' + b[0].cantidad +
      "</td><td>" +
      '$ ' + b[0].totalProducto +
      "</td></tr>"
    );
  }, "");

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    segure: true,
    auth: {
      user: "maximilianochamarro@gmail.com",
      pass: "ksqnsttsfnqdxsyv",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Papelera El sol - Pedido" <maximilianochamarro@gmail.com>`, // sender address
      to: "maximilianochamarro@gmail.com", // list of receivers
      subject: "Pedido de Productos", // Subject line
      text: "Hello world?", // plain text body
      html:
        "<div><table><thead><tr><th>Descripción - - - </th><th>Precio - - - </th><th>Cantidad - - - </th><th>Total - - - </th></tr></thead><tbody>" +
        content +
        `</tbody></table><h1>Total compra: $${totalCompra}</h1></div>`, // html body
    });
  } catch (error) {
    console.log(error);
  }
});

// async function sendEmail({ from, to, subject, html }) {
//   try {
//     console.log("enviando correo2");
//     await mailer.sendMail({
//       from: '"Fred Foo 👻" <maximilianochamarro@gmail.com>', // sender address
//       to: "maximilianochamarro@gmail.com", // list of receivers
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// app.post("/api/form", (req, res) => {
//   nodemailer.createTestAccount((err, account) => {
//     console.log('En nodemailer')
//     const htmlEmail = `
//         <h3>Email enviado desde React</h3>
//         <ul>
//             <li>Email: ${req.body.email}</li>
//             <li>Asunto: ${req.body.asunto}</li>
//         </ul>
//         <h3>Mensaje</h3>
//         <p>${req.body.mensaje}</p>
//       `;
//     let transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       auth: {
//         user: "maximilianochamarro@gmail.com", //El email del servicio SMTP que va a utilizar (en este caso Gmail)
//         pass: "ixambo86" // La contraseña de dicho SMTP
//       }
//     });

//     let mailOptions = {
//       from: "crackcheckeres@gmail.com", // Quien manda el email
//       to: req.body.email, // El email de destino
//       replyTo: "crackcheckeres@gmail.com",
//       subject: req.body.asunto, // El asunto del email
//       text: req.body.mensaje, // El mensaje
//       html: htmlEmail // La parte HTML del email
//     };

//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Mensaje enviado: %s", info.mensaje);
//       console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));
//     });
//   });
// });

// puerto de la app
const PORT = process.env.PORT || 4000;

//arrancar la app
app.listen(PORT, () => {
  console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
