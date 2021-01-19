import * as express from 'express';
import { json } from 'body-parser';
import axios from 'axios';

const server = express();

server.use(json());

server.post('/api/v1/proxy', async (req, res) => {
  const { method, url, data, headers } = req.body;
  try {
    const proxyResponse = await axios.request({ method, url, data, headers });
    res.send({
      data: proxyResponse.data,
      headers: proxyResponse.headers,
      status: proxyResponse.status,
      statusText: proxyResponse.statusText
    });
  } catch (e) {
    res.send({ error: e.message });
  }
});

const port = process.env.PORT ?? 3000;

server.listen(port);
console.log(`Proxy service is up on port ${port}`);
