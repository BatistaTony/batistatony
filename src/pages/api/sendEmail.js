import nodemailer from "nodemailer";

export default async (req, res) => {
  const { body } = req;

  var transport = await nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  var mailOptions = await {
    from: body.email,
    to: "batist.developer@gmail.com",
    subject: "I got a project",
    text: `Iam ${body.name},  ${body.desc}`,
  };

  await transport.sendMail(mailOptions, (err, body) => {
    if (err) {
      res.status(200).json({ error: "sucess" });
    } else {
      res.status(200).json({ msg: "sucess" });
    }
  });
};
