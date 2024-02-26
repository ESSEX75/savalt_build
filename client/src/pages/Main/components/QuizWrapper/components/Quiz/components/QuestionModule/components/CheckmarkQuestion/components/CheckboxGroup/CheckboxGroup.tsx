import React, { useState } from 'react';
import { CheckmarkWrapper, Input, Label, Span } from './styles';
import { ICheckboxGroup } from './types';

const CheckboxGroup: React.FC<ICheckboxGroup> = ({ answers, errors, onCheckChange, defaultValue, fieldName }) => {
    const [checkedValues, setCheckedValues] = useState<string[]>(defaultValue);

    function handleSelect(checkedName: string) {
        const newNames = checkedValues?.includes(checkedName)
            ? checkedValues?.filter((name) => name !== checkedName)
            : [...(checkedValues ?? []), checkedName];
        sessionStorage.setItem(fieldName, JSON.stringify(newNames));
        setCheckedValues(newNames);
        return newNames;
    }

    return (
        <CheckmarkWrapper>
            {answers.map((answerItem) => (
                <Label key={answerItem.value} htmlFor={answerItem.value} errors={errors}>
                    <Input
                        type="checkbox"
                        value={answerItem.value}
                        name={answerItem.value}
                        id={answerItem.value}
                        checked={checkedValues.includes(answerItem.value)}
                        onChange={() => onCheckChange(handleSelect(answerItem.value))}
                    />
                    <Span> {answerItem.label}</Span>
                </Label>
            ))}
        </CheckmarkWrapper>
    );
};

export default CheckboxGroup;
