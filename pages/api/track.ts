import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log('Track:', req.body);
    res.status(200).json({ success: true });
  } else {
    res.status(405).end();
  }
}
