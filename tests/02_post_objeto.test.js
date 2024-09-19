const axios = require('axios');

describe('POST /armario/:objeto', () => {
    it('should create a new objeto successfully', async () => {
        const response = await axios.post('http://localhost:5000/armario/test-objeto');
        
        expect(response.status).toBe(200);
        expect(response.data).toBe('OK');
    });

    it('should return 400 if required fields are missing', async () => {
        try {
            await axios.post('http://localhost:5000/armario/');
        } catch (error) {
            expect(error.response.status).toBe(404);
        }
    });
});