// src/utils/corsMiddleware.ts

import Cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'],
});

type MiddlewareFunction = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (err?: unknown) => void,
) => void;

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: MiddlewareFunction,
): Promise<void> {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      resolve();
    });
  });
}

// Use the cors middleware
export const applyCors = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors);
};

export default runMiddleware;
