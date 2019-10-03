import express from 'express';

import unsplash from './api';

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', async (req, res) => {

  try {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: 'furniture',
        per_page: 12
      }
    });
    console.log(response);

    return res.status(200).send(response.data);

  } catch(e) {
    console.log(e)
    return res.status(503).send({'message': 'Service Unavailable'});
  }
  
});

app.get('/photo/:id', async (req, res) => {

  try {
    const { id } = req.params;
    const response = await unsplash.get(`/photos/${id}`);

    console.log(response);

    return res.status(200).send(response.data)

  } catch(e) {
    console.log(e)
    return res.status(503).send({'message': 'Service Unavailable'});
  }

});

app.listen(3001, () =>
  console.log('shopping-catalog app listening on port 3001!'),
);