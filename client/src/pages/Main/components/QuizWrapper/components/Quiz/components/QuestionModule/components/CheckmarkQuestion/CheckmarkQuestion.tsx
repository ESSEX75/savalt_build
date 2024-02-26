import React from 'react';
import { Root, ErrorWrapper } from './styles';
import { ICheckmarkQuestion } from './types';
import { Typography } from '@mainComponents/index';
import { CheckboxGroup } from './components';
import { Controller } from 'react-hook-form';
import { getDataStringArray } from '@Utils/getDataStringArray';

const CheckmarkQuestion: React.FC<ICheckmarkQuestion> = ({ name, title, answers, errors, control }) => {
    return (
        <Root>
            <Typography tag="h3" variant="smallTitle1bold1center" color="black">
                {title}
            </Typography>
            <ErrorWrapper>
                <Controller
                    name={name}
                    control={control}
                    rules={{ required: true }}
                    defaultValue={getDataStringArray(name, [answers[0].value])}
                    render={({ field: { onChange, name: fieldName } }) => (
                        <CheckboxGroup
                            errors={!!errors[name]}
                            answers={answers}
                            onCheckChange={onChange}
                            defaultValue={getDataStringArray(name, [answers[0].value])}
                            fieldName={fieldName}
                        />
                    )}
                />
                {errors[name] && (
                    <Typography tag="p" variant="smallBody1regular1left" color="orange">
                        Выберите вариант
                    </Typography>
                )}
            </ErrorWrapper>
        </Root>
    );
};

export default CheckmarkQuestion;
