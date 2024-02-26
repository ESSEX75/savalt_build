import { AnswerTypeRadioButtons } from '../../../../../../types';

export interface IRadioGroup {
    radio: AnswerTypeRadioButtons[];
    errors: boolean;
    onCheckChange: (value: string) => void;
    defaultValue: string;
    fieldName: string;
    onClick: () => void;
}

export interface IErrors {
    errors: boolean;
}
