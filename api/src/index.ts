import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { mailApi, telegramApi } from './controller';
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: false,
    parameterLimit: 50000
  })
);

app.use(mailApi);
app.use(telegramApi);

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`listening to the port ${port} .....`);
});
