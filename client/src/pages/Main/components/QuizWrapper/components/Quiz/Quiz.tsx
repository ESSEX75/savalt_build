import React, { useState } from 'react';
import { IForm } from './types';
import {
    CloudWrapper,
    ControlButtonsWrapper,
    CounterWrapper,
    Filler,
    Form,
    ProgressBar,
    ProgressBarWrapper,
} from './styles';
import { Button, Typography } from '@mainComponents/index';
import { QUIZ_LIST } from './constants';
import { Cloud, QuestionModule, PopUpThanks, ErrorModal } from './components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { sendEmail, sendTelegram } from '@Api/index';

const Quiz = () => {
    const [activePopUpThanks, setActivePopUpThanks] = useState(false);
    const [activeErrorModal, setActiveErrorModal] = useState(false);
    const [activeSubmit, setActiveSubmit] = useState(false);

    const [counter, setCounter] = useState(0);
    const {
        handleSubmit,
        control,
        trigger,
        clearErrors,
        formState: { errors },
    } = useForm<IForm>();
    const step = 100 / QUIZ_LIST.length;
    const stepCloud = 224 / QUIZ_LIST.length;

    const onSubmit: SubmitHandler<IForm> = async (data) => {
        setActiveSubmit(true);
        setCounter(0);
        setActivePopUpThanks(true);
        try {
            const [sendEmailResult, sendTelegramResult] = await Promise.allSettled([
                sendEmail(data),
                sendTelegram(data),
            ]);
            console.log('endEmailResult', sendEmailResult.status);
            console.log('sendTelegramResult', sendTelegramResult.status);
            if (sendEmailResult.status !== 'fulfilled' && sendTelegramResult.status !== 'fulfilled') {
                setActivePopUpThanks(false);
                setCounter(0);
                setActiveErrorModal(true);
            }
        } catch (e) {
            console.log(`Возникла ошибка ${e}`);
            setActivePopUpThanks(false);
            setCounter(0);
            setActiveErrorModal(true);
        }
    };

    const next = () => {
        clearErrors();
        trigger().then((result) => {
            if (result) {
                if (counter + 1 != QUIZ_LIST.length) {
                    setCounter((prev) => prev + 1);
                }
            }
        });
    };

    const previous = () => {
        setCounter((prev) => prev - 1);
    };

    return (
        <React.Fragment>
            {activePopUpThanks ? (
                <PopUpThanks setActiveSubmit={setActiveSubmit} setActivePopUpThanks={setActivePopUpThanks} />
            ) : undefined}
            {activeErrorModal ? (
                <ErrorModal setActiveSubmit={setActiveSubmit} setActiveErrorModal={setActiveErrorModal} />
            ) : undefined}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ProgressBarWrapper>
                    <CloudWrapper completed={stepCloud * (counter + 1) - 26}>
                        <CounterWrapper>
                            <Typography tag="p" variant="smallBody1regular1left" color="white">
                                {counter + 1} / {QUIZ_LIST.length}
                            </Typography>
                        </CounterWrapper>
                        <Cloud color="#e75a45" />
                    </CloudWrapper>
                    <ProgressBar>
                        <Filler completed={step * (counter + 1)} />
                    </ProgressBar>
                </ProgressBarWrapper>
                <QuestionModule next={next} counter={counter} control={control} errors={errors} />
                <ControlButtonsWrapper>
                    {counter != 0 ? (
                        <Button onClick={previous} variant="control" type="button">
                            ← Назад
                        </Button>
                    ) : undefined}
                    {counter + 1 != QUIZ_LIST.length ? (
                        <Button onClick={next} variant="control" type="button">
                            Далее →
                        </Button>
                    ) : undefined}
                    {counter + 1 == QUIZ_LIST.length ? (
                        <Button disabled={activeSubmit} variant="control" type="submit">
                            Отправить
                        </Button>
                    ) : undefined}
                </ControlButtonsWrapper>
            </Form>
        </React.Fragment>
    );
};

export default Quiz;
