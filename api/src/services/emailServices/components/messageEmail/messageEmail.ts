import nodemailer from 'nodemailer';
import * as path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';
import ejs from 'ejs';
import { UserRequestBody } from '../../types';

dotenv.config();
const { EMAIL_HOST, EMAIL_HOST_PASSWORD, EMAIL_HOST_USER, EMAIL_RECIPIENT, EMAIL_SUBJECT } = process.env;

const messageEmail = async (mailObj: UserRequestBody) => {
  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: 587,
      auth: {
        user: EMAIL_HOST_USER,
        pass: EMAIL_HOST_PASSWORD
      }
    });

    const templateString = fs.readFileSync(path.resolve(__dirname, '../../template/email-template.ejs'), 'utf-8');

    const html = ejs.render(templateString, { data: mailObj });

    const info = await transporter.sendMail({
      from: EMAIL_HOST_USER,
      to: EMAIL_RECIPIENT,
      subject: EMAIL_SUBJECT,
      text: 'Message',
      html
    });

    console.log(`Message sent: ${info.messageId}`);
    return `Message sent: ${info.messageId}`;
  } catch (error) {
    console.error(error);
    return new Error(
            `Что то пошло не так с почтой: ${error.message}`
    );
  }
};

export default messageEmail;
