import * as express from 'express';
import * as cors from 'cors';
import alunoRoute from './module/aluno/aluno.route';

const app = express();
app.use(express.json());
app.use(cors());
app.options('*', cors());

app.use('/aluno', alunoRoute);

app.listen(8080, () => {
  console.log('server is running');
});

export default app; // Adicione esta linha
