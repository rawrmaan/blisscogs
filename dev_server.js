const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./config/webpack.dev');
const request = require('request-promise')

const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3000;

const apiRoot = 'https://api.discogs.com'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
      exclude: ['node_modules']
    }
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

app.use(express.static('static'))

app.get('/api/releases/:page', (req, res) => {
  const page = +req.params.page
  const {DISCOGS_KEY, DISCOGS_SECRET} = process.env

  request(
    `${apiRoot}/users/blacklight/collection/folders/0/releases?per_page=100&page=${page}`,
    {
      json: true,
      headers: {
        'Authorization': `Discogs key=${DISCOGS_KEY}, secret=${DISCOGS_SECRET}`,
        'User-Agent': 'Blisscogs/1.0 +http://blisscogs.herokuapp.com/'
      }
    }
  ).then((response) => {
    const releasesResponse = {
      items: response.releases,
      nextPage: null
    }

    if (page < response.pagination.pages) {
      releasesResponse.nextPage = page + 1
    }

    res.send(releasesResponse)
  }).catch((error) => {
    res.error(error)
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://localhost:${port}`);
});
