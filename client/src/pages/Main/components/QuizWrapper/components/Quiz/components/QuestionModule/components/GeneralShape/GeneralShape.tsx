import React from 'react';
import {
    Root,
    SelectWrapper,
    InputTitleWrapper,
    InputField,
    ErrorsWrapper,
    StyleInputMask,
    customStyles,
} from './styles';
import { IGeneralShape } from './types';
import { Typography } from '@mainComponents/index';
import { Controller } from 'react-hook-form';
import { AnswerTypeSelect, GeneralShapeType } from '../../../../types';
import { getDataString } from '@Utils/getDataString';
import Select, { SingleValue } from 'react-select';

const phoneMask: string = '+7 (999) 999-9999';

const GeneralShape: React.FC<IGeneralShape> = ({ inputs, title, control, errors }) => {
    const handleSelect = (name: string, selectValue: SingleValue<AnswerTypeSelect>) => {
        if (selectValue) {
            sessionStorage.setItem(name, JSON.stringify(selectValue.value));
            return selectValue.value;
        }
    };

    const handleChange = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        sessionStorage.setItem(name, JSON.stringify(e.currentTarget.value));
        return e.currentTarget.value;
    };

    const typeChecking = (generalShapeInputs: GeneralShapeType) => {
        switch (generalShapeInputs.type) {
            case 'select':
                return (
                    <SelectWrapper key={generalShapeInputs.name}>
                        <Typography tag="p" variant="body1regular1left" color="black">
                            {generalShapeInputs.title}
                        </Typography>
                        <Controller
                            name={generalShapeInputs.name}
                            control={control}
                            defaultValue={getDataString(generalShapeInputs.name, generalShapeInputs.answers[0].value)}
                            render={({ field: { onChange: onCheckChange, value, name: fieldName } }) => (
                                <Select
                                    styles={customStyles}
                                    value={generalShapeInputs.answers.find((answer) => answer.value === value)}
                                    options={generalShapeInputs.answers}
                                    onChange={(selectValue) => onCheckChange(handleSelect(fieldName, selectValue))}
                                />
                            )}
                        />
                    </SelectWrapper>
                );
            case 'input':
                return (
                    <InputTitleWrapper key={generalShapeInputs.name}>
                        <Typography tag="label" variant="body1regular1left" color="black">
                            {generalShapeInputs.title}
                        </Typography>
                        <ErrorsWrapper>
                            <Controller
                                name={generalShapeInputs.name}
                                control={control}
                                rules={{ required: true }}
                                defaultValue={getDataString(generalShapeInputs.name, '')}
                                render={({ field: { onChange: onCheckChange, name: fieldName } }) => (
                                    <InputField
                                        value={getDataString(generalShapeInputs.name, '')}
                                        errors={!!errors[generalShapeInputs.name]}
                                        type="text"
                                        placeholder={generalShapeInputs.placeholder}
                                        onChange={(e) => onCheckChange(handleChange(fieldName, e))}
                                    />
                                )}
                            />
                            {errors[generalShapeInputs.name] && (
                                <Typography tag="p" variant="smallBody1regular1left" color="orange">
                                    Поле должно быть заполнено
                                </Typography>
                            )}
                        </ErrorsWrapper>
                    </InputTitleWrapper>
                );
            case 'phoneInput':
                return (
                    <InputTitleWrapper key={generalShapeInputs.name}>
                        <Typography tag="label" variant="body1regular1left" color="black">
                            {generalShapeInputs.title}
                        </Typography>
                        <ErrorsWrapper>
                            <Controller
                                name={generalShapeInputs.name}
                                control={control}
                                rules={{ required: true }}
                                defaultValue={getDataString(generalShapeInputs.name, '')}
                                render={({ field: { onChange: onCheckChange, name: fieldName } }) => (
                                    <StyleInputMask
                                        value={getDataString(generalShapeInputs.name, '')}
                                        mask={phoneMask}
                                        errors={!!errors[generalShapeInputs.name]}
                                        type="text"
                                        onChange={(e) => onCheckChange(handleChange(fieldName, e))}
                                    />
                                )}
                            />
                            {errors[generalShapeInputs.name] && (
                                <Typography tag="p" variant="smallBody1regular1left" color="orange">
                                    Поле должно быть заполнено
                                </Typography>
                            )}
                        </ErrorsWrapper>
                    </InputTitleWrapper>
                );
            default:
                alert('Нет таких значений');
        }
    };

    return (
        <Root>
            <Typography tag="h3" variant="smallTitle1bold1center" color="black">
                {title}
            </Typography>
            {inputs.map((selectItem) => typeChecking(selectItem))}
        </Root>
    );
};

export default GeneralShape;
