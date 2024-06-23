import { Server } from 'socket.io';
import { NextApiRequest, NextApiResponse } from 'next';
import { Server as HTTPServer } from 'http';
import { Socket } from 'net';

interface SocketWithServer extends Socket {
  server: HTTPServer & {
    io?: Server;
  };
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithServer;
}

const handler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server);

    io.on('connection', (socket) => {
      console.log('New client connected');

      // Emit real-time data to clients every second
      setInterval(() => {
        const data = {
          // Replace with actual real-time data fetching logic
          marketData: {
            BTC: Math.random() * 10000,
            ETH: Math.random() * 5000,
            USDT: 1.0,
          },
          notifications: [],
        };
        socket.emit('update', data);
      }, 1000);

      socket.on('disconnect', () => {
        console.log('Client disconnected');
      });
    });

    res.socket.server.io = io;
  }
  res.end();
};

export default handler;
