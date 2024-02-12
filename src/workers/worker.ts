import * as http from 'http';
import { handleGetUserById, handleGetUsers } from '../server/handlers/get';
import handleCreateUser from '../server/handlers/post';
import handleUpdateUser from '../server/handlers/put';
import handleDeleteUser from '../server/handlers/delete';
import sendResponse from '../utils/response';

export const startWorker = async (port: number) => {
  const server = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
      const { method, url } = req;

      try {
        switch (true) {
          case method === 'GET' && url === '/api/users':
            handleGetUsers(req, res);
            break;
          case method === 'GET' && url?.startsWith('/api/users/'):
            handleGetUserById(req, res);
            break;
          case method === 'POST' && url === '/api/users':
            handleCreateUser(req, res);
            break;
          case method === 'PUT' && url?.startsWith('/api/users/'):
            handleUpdateUser(req, res);
            break;
          case method === 'DELETE' && url?.startsWith('/api/users/'):
            handleDeleteUser(req, res);
            break;
          default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
        }
      } catch (error) {
        sendResponse(res, 500, { message: 'Internal server error' });
      }

      res.end(`Hello from worker ${port}`);
    }
  );

  server.listen(port, () => {
    console.log(`Worker ${port} listening on port ${port}`);
  });
};
