import axios from 'axios';
import { IForm } from '../../pages/Main/components/QuizWrapper/components/Quiz/types';

const sendTelegram = async (value: IForm) => {
    try {
        return await axios.post('/api/telegram', value);
    } catch (err) {
        console.log(`Возникла ошибка ${err}`);
        throw new Error('Request was not sent');
    }
};

export default sendTelegram;
