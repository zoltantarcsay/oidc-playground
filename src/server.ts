import * as express from 'express';
import { json } from 'body-parser';
import axios from 'axios';

const server = express();

server.use(json());

server.post('/api/v1/proxy', async (req, res) => {
  const { method, url, data, headers } = req.body;
  try {
    const options = { method, url, data, headers };
    console.log(options);
    const proxyResponse = await axios.request(options);
    res.send({
      data: proxyResponse.data,
      headers: proxyResponse.headers,
      status: proxyResponse.status,
      statusText: proxyResponse.statusText
    });
  } catch (e) {
    // console.log(e.request);
    res.send({ error: e.message });
  }
});

const port = process.env.PORT ?? 3000;

server.listen(port);
console.log(`Proxy service is up on port ${port}`);
