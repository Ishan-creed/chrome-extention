import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './routes/router.js';
dotenv.config();

const app = express();
app.use(cors());

app.use("/",Routes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});