import { messageEmail } from './components';
import { Response } from 'express';
import { RequestBody, UserRequestBody } from './types';

const emailServices = async (req: RequestBody<UserRequestBody>, res: Response) => {
  const result = await messageEmail(req.body);
  if (!(result instanceof Error)) {
    res.json({
      status: true,
      payload: result
    });
  } else {
    console.error(result.message);
    res.status(500).json({
      status: false,
      payload: result.message ? result.message : result
    });
  }
};

export default emailServices;
