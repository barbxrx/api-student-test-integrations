import * as request from 'supertest';
import app from '../../../server'; 

describe('Testes de integração para os endpoints de aluno', () => {
  it('GET /aluno deve retornar uma lista de alunos', async () => {
    const response = await request(app).get('/aluno');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  it('POST /aluno deve criar um novo aluno', async () => {
    const novoAluno = {
      // dados do aluno
      nome: 'Babi',
      idade: 25,
      cpf: 44804502890
    };

    const response = await request(app)
      .post('/aluno')
      .send(novoAluno);

    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
  });
});
