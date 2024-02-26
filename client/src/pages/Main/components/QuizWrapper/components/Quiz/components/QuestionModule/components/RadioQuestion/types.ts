import { AnswerTypeRadioButtons } from '../../../../types';
import { Control, FieldErrors } from 'react-hook-form';
import { IForm } from '../../../../types';

export interface IRadioQuestion {
    name: string;
    title: string;
    radio: AnswerTypeRadioButtons[];
    errors: FieldErrors<IForm>;
    onClick: () => void;
    control: Control<IForm>;
}
