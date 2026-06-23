import nodemailer from "nodemailer";

const gmailUser = "faithglover08@gmail.com";

export function getMailTransporter() {
  const appPass = process.env.APP_PASS;

  if (!appPass) {
    throw new Error("APP_PASS is not configured.");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: appPass,
    },
  });
}

export const quoteRecipientEmail = gmailUser;
