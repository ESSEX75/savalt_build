import { AnswerTypeIPicture } from '../../../../../../types';

export interface IPictureGroup {
    answer: AnswerTypeIPicture[];
    errors: boolean;
    onCheckChange: (value: string) => void;
    defaultValue: string;
    fieldName: string;
}

export interface IErrors {
    errors: boolean;
}

export interface IImage {
    url: string;
}
