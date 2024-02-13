import * as http from 'http';
import { startWorker } from './worker';

const numWorkers = require('os').cpus().length - 1;
const basePort = process.env.PORT || 4000;

const workers: any = [];

for (let i = 0; i < numWorkers; i++) {
  const port = +basePort + i + 1;
  workers.push(startWorker(port));
}

let nextWorkerIndex = 0;

const loadBalancer = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    const worker = workers[nextWorkerIndex];
    worker.emit('connection', req, res);

    nextWorkerIndex = (nextWorkerIndex + 1) % numWorkers;
  }
);

loadBalancer.listen(basePort, () => {
  console.log(`Load balancer listening on port ${basePort}`);
});
