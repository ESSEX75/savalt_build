import { FieldErrors, Control } from 'react-hook-form';
import { IForm } from '../../../../types';
import { AnswerTypeCheckmark } from '../../../../types';

export interface ICheckmarkQuestion {
    name: string;
    title: string;
    answers: AnswerTypeCheckmark[];
    errors: FieldErrors<IForm>;
    control: Control<IForm>;
}
