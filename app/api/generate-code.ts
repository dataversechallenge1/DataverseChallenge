// pages/api/generate-code.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { code } = req.body;
      const openaiApiKey = process.env.OPENAI_API_KEY || '';

      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: code,
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiApiKey}`,
          },
        }
      );

      const generatedCode = response.data.choices[0]?.text || 'No code generated.';
      res.status(200).json({ generatedCode });
    } catch (error) {
      console.error('Error generating code:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
