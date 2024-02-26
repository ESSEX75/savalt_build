import { AnswerTypeCheckmark } from '../../../../../../types';

export interface ICheckboxGroup {
    answers: AnswerTypeCheckmark[];
    errors: boolean;
    onCheckChange: (value: string[]) => void;
    defaultValue: string[];
    fieldName: string;
}

export interface IErrors {
    errors: boolean;
}
