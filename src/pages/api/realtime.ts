import { Server } from 'socket.io';

export default function handler(req: any, res: any) {
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
            USDT: 1.00,
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
}
