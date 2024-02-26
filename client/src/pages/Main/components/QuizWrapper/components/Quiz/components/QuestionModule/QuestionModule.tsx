import React, { useEffect, useState } from 'react';
import { IQuizList } from '../../types';
import { RadioQuestion, CheckmarkQuestion, PictureQuestion, GeneralShape } from './components';
import { QUIZ_LIST } from '../../constants';
import { IQuestionModule } from './types';
import { AnimationWrapper } from './styles';

const QuestionModule: React.FC<IQuestionModule> = ({ next, errors, control, counter }) => {
    const typeChecking = (quizElement: IQuizList) => {
        switch (quizElement.type) {
            case 'radio':
                return (
                    <RadioQuestion
                        errors={errors}
                        control={control}
                        key={`question_module-${quizElement.id}`}
                        radio={quizElement.answers}
                        title={quizElement.title}
                        onClick={next}
                        name={quizElement.name}
                    />
                );
            case 'checkmark':
                return (
                    <CheckmarkQuestion
                        control={control}
                        key={`checkmark_question-${quizElement.id}`}
                        name={quizElement.name}
                        title={quizElement.title}
                        answers={quizElement.answers}
                        errors={errors}
                    />
                );
            case 'picture':
                return (
                    <PictureQuestion
                        control={control}
                        errors={errors}
                        key={`picture_question-${quizElement.id}`}
                        name={quizElement.name}
                        title={quizElement.title}
                        answer={quizElement.answers}
                    />
                );
            case 'generalShape':
                return (
                    <GeneralShape
                        errors={errors}
                        control={control}
                        key={`general_shape-${quizElement.id}`}
                        title={quizElement.title}
                        inputs={quizElement.inputs}
                    />
                );
            default:
                return undefined;
        }
    };

    const quizList = QUIZ_LIST.map((quizElement) => (
        <AnimationWrapper key={`animation_wrapper-${quizElement.id}`}>{typeChecking(quizElement)}</AnimationWrapper>
    ));

    return <React.Fragment>{quizList[counter]}</React.Fragment>;
};

export default QuestionModule;
