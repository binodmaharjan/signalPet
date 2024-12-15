import request from 'supertest';
import app from '../app';

import axios from 'axios';

jest.mock('axios'); // Mock axios
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe.skip('Translate API', () => {
    it('should translate text from English to Spanish', async () => {

        // mockedAxios.post.mockResolvedValueOnce({ data: { translatedText: 'Hola' } });

        // const response = await request(app)
        //     .post('/translate')
        //     .send({ text: 'Hello', targetLang: 'es' });

        // expect(response.status).toBe(200);
        // expect(response.body.translatedText).toBe('Hola');
    });

    
});