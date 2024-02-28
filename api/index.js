import express from 'express';
import cors from 'cors';
import NotasRouter from './src/routes/NotasRouter.js';
export const app = express();
app.use(cors());
app.use(express.json());

//routes
app.use('/api/notas', NotasRouter);

const port = 5000;
app.listen(port, () => {
  console.log(`Servicio en puerto ${port}`);
});
