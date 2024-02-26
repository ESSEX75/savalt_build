export interface IForm {
    [key: string]: string | string[];
}

export interface IFiller {
    completed: number;
}

export interface ICloudWrapper {
    completed: number;
}

export type AnswerTypeSelect = {
    label: string;
    value: string;
};

export type AnswerTypeCheckmark = {
    label: string;
    value: string;
};

interface ICheckmark {
    id: number;
    name: string;
    title: string;
    type: 'checkmark';
    answers: AnswerTypeCheckmark[];
}

export type AnswerTypeRadioButtons = {
    answer: string;
    key: string;
};

interface IRadioButtons {
    id: number;
    name: string;
    title: string;
    type: 'radio';
    answers: AnswerTypeRadioButtons[];
}

export type AnswerTypeIPicture = {
    answer: string;
    key: string;
    image: string;
};

interface IPicture {
    id: number;
    name: string;
    title: string;
    type: 'picture';
    answers: AnswerTypeIPicture[];
}

export type SelectsType = {
    title: string;
    type: 'select';
    name: string;
    answers: AnswerTypeSelect[];
};

export type InputType = {
    name: string;
    type: 'input';
    title: string;
    placeholder: string;
};

export type PhoneInputType = {
    name: string;
    type: 'phoneInput';
    title: string;
};

export type GeneralShapeType = InputType | SelectsType | PhoneInputType;

interface IInputFields {
    id: number;
    title: string;
    type: 'generalShape';
    inputs: GeneralShapeType[];
}

export type IQuizList = ICheckmark | IRadioButtons | IPicture | IInputFields;
