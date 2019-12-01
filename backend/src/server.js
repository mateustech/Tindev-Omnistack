const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();
mongoose
  .connect('mongodb+srv://prosoft:admin@aircnc-backend-kklf6.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  ).then(() => {
    console.log("DB Conectado")
  });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);