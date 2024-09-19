const axios = require('axios');

describe('POST /cliente', () => {
    it('should create a new cliente successfully', async () => {
        const newCliente = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890'
        };

        const response = await axios.post('http://localhost:3000/cliente', newCliente);

        expect(response.status).toBe(201);
        expect(response.data).toHaveProperty('id');
        expect(response.data.name).toBe(newCliente.name);
        expect(response.data.email).toBe(newCliente.email);
        expect(response.data.phone).toBe(newCliente.phone);
    });

    it('should return 400 if required fields are missing', async () => {
        const incompleteCliente = {
            name: 'Jane Doe'
        };

        try {
            await axios.post('http://localhost:3000/cliente', incompleteCliente);
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data).toHaveProperty('message');
        }
    });

    it('should return 409 if cliente already exists', async () => {
        const existingCliente = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '1234567890'
        };

        await axios.post('http://localhost:3000/cliente', existingCliente);

        try {
            await axios.post('http://localhost:3000/cliente', existingCliente);
        } catch (error) {
            expect(error.response.status).toBe(409);
            expect(error.response.data).toHaveProperty('message');
        }
    });
});