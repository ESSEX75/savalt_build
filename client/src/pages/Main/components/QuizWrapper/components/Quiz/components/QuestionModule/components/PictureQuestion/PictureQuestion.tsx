import React from 'react';
import { Root, ErrorWrapper } from './styles';
import { IPictureQuestion } from './types';
import { Typography } from '@mainComponents/index';
import { Controller } from 'react-hook-form';
import { getDataString } from '@Utils/getDataString';
import { PictureGroup } from './components';

const PictureQuestion: React.FC<IPictureQuestion> = ({ name, answer, title, control, errors }) => {
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
                    defaultValue={getDataString(name, '')}
                    render={({ field: { onChange, name: fieldName } }) => (
                        <PictureGroup
                            errors={!!errors[name]}
                            answer={answer}
                            onCheckChange={onChange}
                            defaultValue={getDataString(name, '')}
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

export default PictureQuestion;
