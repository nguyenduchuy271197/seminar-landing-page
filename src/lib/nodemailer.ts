import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_AUTH_USERNAME!,
    pass: process.env.NODEMAILER_AUTH_PASSWORD!,
  },
});
