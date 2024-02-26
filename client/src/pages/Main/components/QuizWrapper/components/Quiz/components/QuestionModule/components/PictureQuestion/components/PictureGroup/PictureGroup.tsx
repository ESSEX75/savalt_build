import React, { useState } from 'react';
import { Input, Label, Radio, RadioWrapper, Image, ImageCheck } from './styles';
import { IPictureGroup } from './types';
import { Typography } from '@mainComponents/index';
import { CheckSvg } from './components';

const PictureGroup: React.FC<IPictureGroup> = ({ answer, errors, onCheckChange, defaultValue, fieldName }) => {
    const [checkedValues, setCheckedValues] = useState<string>(defaultValue);
    const handleSelect = (checkedName: string) => {
        sessionStorage.setItem(fieldName, JSON.stringify(checkedName));
        setCheckedValues(checkedName);
        return checkedName;
    };

    return (
        <RadioWrapper errors={errors}>
            {answer.map((pictureAnswer, index) => (
                <Radio key={index}>
                    <Input
                        id={`${index}`}
                        type="radio"
                        name="radio"
                        value={pictureAnswer.key}
                        checked={checkedValues === pictureAnswer.key}
                        onChange={() => onCheckChange(handleSelect(pictureAnswer.key))}
                    />
                    <Label htmlFor={`${index}`}>
                        <Image url={pictureAnswer.image}>
                            <ImageCheck>
                                <CheckSvg color="#e75a45" />
                            </ImageCheck>
                        </Image>
                        <Typography tag="p" variant="body1regular1center" color="black">
                            {pictureAnswer.answer}
                        </Typography>
                    </Label>
                </Radio>
            ))}
        </RadioWrapper>
    );
};

export default PictureGroup;
