import { IDescriptionList } from './types';
import money from './images/money.png';
import pin from './images/pin-front-color.png';
import crow from './images/crow-front-color.png';
import fire from './images/fire-front-color.png';
import car from './images/car.png';
import tick from './images/tick-front-color.png';
import boy from './images/boy-front-color.png';
import thumb from './images/thumb-up-front-color.png';
import shield from './images/sheild-front-color.png';

export const DESCRIPTION_LIST: IDescriptionList[] = [
    { id: 1, description: 'Официальная белая ЗП до 260 000 ₽ два раза в месяц', icon: money },
    { id: 2, description: 'Фиксированный удобный график работы на выбор', icon: pin },
    { id: 3, description: 'Оклад, вне зависимости ни от чего 40.000 ₽', icon: crow },
    { id: 4, description: 'Оплачиваемые отпуск и больничный', icon: fire },
    { id: 5, description: 'Новые машины, еще на гарантии. Поездки только по РФ', icon: car },
    { id: 6, description: 'Льготное кредитование от ведущих банков', icon: tick },
    { id: 7, description: 'ДМС, спецодежда', icon: boy },
    { id: 8, description: 'Работаем по РТО', icon: thumb },
    { id: 9, description: 'В компании есть бронирование', icon: shield },
];
