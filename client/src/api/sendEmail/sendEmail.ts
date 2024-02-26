import axios from 'axios';
import { IForm } from '../../pages/Main/components/QuizWrapper/components/Quiz/types';

const sendEmail = async (value: IForm) => {
    try {
        return await axios.post('/api/sendmail', value);
    } catch (err) {
        console.log(`Возникла ошибка ${err}`);
        throw new Error('Request was not sent');
    }
};

export default sendEmail;
