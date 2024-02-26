import { IForm } from '../../types';
import { Control, FieldErrors } from 'react-hook-form';

export interface IQuestionModule {
    counter: number;
    next: () => void;
    control: Control<IForm>;
    errors: FieldErrors<IForm>;
}
