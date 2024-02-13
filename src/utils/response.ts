import { ServerResponse } from 'http';
import { ApiResponse } from '../types/types';

const sendResponse = <T>(res: ServerResponse, status: number, data?: T) => {
  const response: ApiResponse<T> = {
    status,
    data,
  };

  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
};
export default sendResponse;
