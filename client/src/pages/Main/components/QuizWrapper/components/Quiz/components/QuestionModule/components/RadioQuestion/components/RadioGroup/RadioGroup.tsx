import React, { useState } from 'react';
import { Input, Label, Radio, RadioWrapper } from './styles';
import { IRadioGroup } from './types';

const RadioGroup: React.FC<IRadioGroup> = ({ radio, errors, onCheckChange, defaultValue, fieldName, onClick }) => {
    const [checkedValues, setCheckedValues] = useState<string>(defaultValue);
    function handleSelect(checkedName: string) {
        sessionStorage.setItem(fieldName, JSON.stringify(checkedName));
        setCheckedValues(checkedName);
        return checkedName;
    }

    return (
        <RadioWrapper errors={errors}>
            {radio.map((radioItem, index) => (
                <Radio key={index}>
                    <Input
                        id={`${index}`}
                        type="radio"
                        name="radio"
                        value={radioItem.key}
                        checked={checkedValues === radioItem.key}
                        onChange={() => onCheckChange(handleSelect(radioItem.key))}
                        onClick={onClick}
                    />
                    <Label htmlFor={`${index}`}>{radioItem.answer}</Label>
                </Radio>
            ))}
        </RadioWrapper>
    );
};

export default RadioGroup;
