import dotenv from 'dotenv';
import { UserRequestBody } from '../../../emailServices/types';
import TelegramBot from 'node-telegram-bot-api';
dotenv.config();
const { TELEGRAM_ID_CHAT, TELEGRAM_TOKEN } = process.env;

const messageTelegram = async (mailObj: UserRequestBody) => {
  try {
    let msg = '';
    for (const key in mailObj) {
      msg = msg + `${key}: ${mailObj[key]}` + '\n';
    }

    const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });
    const info = await bot.sendMessage(TELEGRAM_ID_CHAT, msg);
    await bot.stopPolling();
    return `Message sent: ${info.message_id}`;
  } catch (err) {
    return new Error(
        `Что то пошло не так с телеграм ботом: ${err.message}`
    );
  }
};

export default messageTelegram;
