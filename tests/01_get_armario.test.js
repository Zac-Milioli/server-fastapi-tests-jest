const axios = require('axios');

describe('GET /armario', () => {
    it('should return the contents of the armario', async () => {
        const response = await axios.get('http://localhost:5000/armario');
        
        expect(response.status).toBe(200);
        expect(response.data).toHaveProperty('nome');
        expect(response.data).toHaveProperty('conteudos');
        expect(Array.isArray(response.data.conteudos)).toBe(true);
    });
});