import express from 'express';
import config from './config';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'hello EJS',
  });
});

server.use(express.static('public'));
server.listen(config.port, config.host, () => {
  console.log('listening to port 3000 ');
});
