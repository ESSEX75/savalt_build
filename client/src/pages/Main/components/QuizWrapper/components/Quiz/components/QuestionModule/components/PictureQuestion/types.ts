import { AnswerTypeIPicture } from '../../../../types';
import { Control, FieldErrors } from 'react-hook-form';
import { IForm } from '../../../../types';

export interface IPictureQuestion {
    name: string;
    title: string;
    answer: AnswerTypeIPicture[];
    errors: FieldErrors<IForm>;
    control: Control<IForm>;
}
