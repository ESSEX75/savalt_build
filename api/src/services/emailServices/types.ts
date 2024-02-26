import { Request } from 'express';

export interface UserRequestBody {
    [key: string]: string | string[];
};
export type RequestBody<T> = Request<{}, {}, T>;
