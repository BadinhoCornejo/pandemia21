import * as functions from "firebase-functions";
import * as sendgrid from "@sendgrid/mail";
import * as corsModule from "cors";
sendgrid.setApiKey(
  "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"
);

const cors = corsModule({ origin: true });

exports.test = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({ message: "Only POST request allowed" });
    }

    const text = `<div><h1>Hola</h1><p>GAAAAAAAAAAA</p></div>`;

    const msg = {
      to: "badinho9@hotmail.com",
      from: "badinhocornejo@gmail.com",
      subject: "Nuevo mensaje de Badinho",
      text: text,
      html: text
    };

    return sendgrid
      .send(msg)
      .then(response => res.status(200).json({ message: response }))
      .catch(err => res.status(500).json({ message: err }));
  });
});
