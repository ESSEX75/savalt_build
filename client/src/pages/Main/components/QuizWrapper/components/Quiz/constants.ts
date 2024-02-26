import { IQuizList } from './types';
import bereza from './images/bereza.jpg';
import ekb from './images/ekb.jpg';
import novouralsk from './images/novouralsk.jpg';
import pervik from './images/pervik.jpg';

export const QUIZ_LIST: IQuizList[] = [
    {
        id: 1,
        title: 'Город в котором вы проживаете?',
        type: 'picture',
        name: 'city',
        answers: [
            { image: ekb, key: 'Ekaterinburg', answer: 'Екатеринбург' },
            { image: pervik, key: 'Pervouralsk', answer: 'Первоуральск' },
            { image: novouralsk, key: 'Novouralsk', answer: 'Новоуральск' },
            { image: bereza, key: 'Berezovsky', answer: 'Березовский' },
        ],
    },
    {
        id: 2,
        name: 'shedule',
        title: 'Желаемый график работы?',
        type: 'radio',
        answers: [
            { answer: '15/15', key: '15_15' },
            { answer: '21/7', key: '21_7' },
            { answer: '30/10', key: '30_10' },
        ],
    },
    {
        id: 3,
        name: 'salary',
        title: 'Отметьте, что вам важно',
        type: 'checkmark',
        answers: [
            { label: 'Официальная белая зарплата', value: 'belaya_zarplata' },
            { label: 'Оплачиваемый отпуск и больничный', value: 'otpusk_i_bolnichnyj' },
            { label: 'Социальный пакет', value: 'socialnyj_paket' },
            { label: 'Фиксированный график', value: 'fiksirovannyj_grafik' },
        ],
    },
    {
        id: 4,
        name: 'experience',
        title: 'Стаж вождения категории Е',
        type: 'radio',
        answers: [
            { answer: 'Менее 1 года', key: 'menee_1_goda' },
            { answer: 'Более 1 года', key: 'bolee_1_goda' },
            { answer: 'Более 5 лет', key: 'bolee_5_let' },
            { answer: 'Более 10 лет', key: 'bolee_10_let' },
        ],
    },
    {
        id: 5,
        name: 'criminal_record',
        title: 'Есть ли судимость/лишались ли прав?',
        type: 'radio',
        answers: [
            { answer: 'Нет', key: 'net' },
            { answer: 'Да, судимость', key: 'sudimost' },
            { answer: 'Да, лишался прав', key: 'net_prav' },
            { answer: 'Да, и судимость и лишался прав', key: 'sudimost_i_resheniye' },
        ],
    },
    {
        id: 6,
        title: 'Остался 1 шаг до того, как сделаем вам предложение о работе',
        type: 'generalShape',
        inputs: [
            { title: 'Введите номер телефона', type: 'phoneInput', name: 'phone' },
            {
                title: 'Выберите мессенджер, на который вам напишет наш менеджер',
                name: 'messenger',
                type: 'select',
                answers: [
                    { value: 'Telegram', label: 'Telegram' },
                    { value: 'WhatsApp', label: 'WhatsApp' },
                ],
            },
        ],
    },
];
