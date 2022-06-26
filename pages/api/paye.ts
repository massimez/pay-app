import type { NextApiRequest, NextApiResponse } from 'next';
import { createPayment } from '../../lib/redis';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  const objRes = await createPayment(req.body);
  res.status(200).json({ objRes });
}
