import type { NextApiRequest, NextApiResponse } from "next";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { awsSesClient } from "src/lib/aws/getSesClient";
import { sleep } from "src/lib/util";

interface IError {
  field: string;
  error: string;
}

let errors: IError[] = [];
const addError = (error: { field: string; error: string }) => {
  if (!errors) {
    errors = [];
  }

  errors.push(error);
};

/*
 * Validate request data, and use AWS SDK to send email
 * via AWS SES
 */
const handleContactForm = async (req: NextApiRequest, res: NextApiResponse) => {
  errors = [];
  let status = "failed";

  const emailAddress = req.body.email;
  const name = req.body.name;
  const message = req.body.message;

  const emailRegex = new RegExp(/^[^s@]+@([^s@.,]+.)+[^s@.,]{2,}$/);

  if (!emailAddress) {
    addError({ field: "email", error: "Enter your email address." });
  } else if (!emailRegex.exec(emailAddress)) {
    addError({
      field: "email",
      error: "The email address you entered is invalid."
    });
  }

  if (!name) {
    addError({ field: "name", error: "Enter your name." });
  }

  if (!message) {
    addError({ field: "message", error: "Enter your message." });
  }

  if (errors.length === 0) {
    const emailCommand = new SendEmailCommand({
      Destination: {
        ToAddresses: [process.env.ADMIN_EMAIL ?? ""]
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: formatMessage(name, emailAddress, message)
          },
          Text: {
            Charset: "UTF-8",
            Data: "danbeddows.com contact submission"
          }
        },
        Subject: {
          Charset: "UTF-8",
          Data: "New Contact Form Submission"
        }
      },
      Source: process.env.ADMIN_EMAIL_FROM ?? ""
    });

    await awsSesClient
      .send(emailCommand)
      .then((data: any) => {
        status = "success";
      })
      .catch((err: any) => {
        console.log(err);
        addError({
          field: "internal",
          error: "An unknown error occured. Please try again later."
        });
      });

    // Add arbitary thread pause, so the request doesn't finish too fast
    // and seem broken / like a message was not sent
    await sleep(2000);
  }

  res.json({
    status,
    errors
  });
};

const formatMessage = (name: string, email: string, message: string) => {
  return `
      <html>
        <body>
          <h1>New Contact Form Submission</h1>

          <h2>Name</h2>
          <p>${name}</p>

          <h2>Email</h2>
          <p>${email}</p>
          
          <h2>Message</h2>
          <p>${message}</p>
        </body>
      </html>
    `;
};

export default handleContactForm;
