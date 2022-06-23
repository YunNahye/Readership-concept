const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./Router');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config()

sequelize
  .sync()
  .then(() => {
    console.log('sequelize-DB연결');
  })
  .catch((err) => {
    console.log('DB연결 실패', err);
  });

app.use(express.json());
app.use(express.urlencoded({ extends: true}));

app.use(cors({
  origin: true,
  credentials: true
}));

app.use('/api', router);

const port=5000;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});