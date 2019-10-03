import express from 'express';

import axios from 'axios';

const app = express();
const baseURL = "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {

  try {
    const response = await axios.get(baseURL);
    console.log(response);

    return res.status(200).send(response.data);

  } catch(e) {
    console.log(e)
    return res.status(503).send({'message': 'Service Unavailable'});
  }
  
});

app.listen(3001, () =>
  console.log('shopping-catalog app listening on port 3001!'),
);