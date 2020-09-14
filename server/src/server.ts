import express from 'express';
import routes from './routes';
import cors from 'cors';
import  dotenv from 'dotenv';
dotenv.config()

const { PORT = '3333', HOST = 'localhost' } = process.env;

const app = express();

// Add URL of resquest and response in cors

app.use(cors());
app.use(express.json());

app.use('/api/v1', routes);

app.listen(PORT, () => {
    console.log(`${HOST}:${PORT}`);
});