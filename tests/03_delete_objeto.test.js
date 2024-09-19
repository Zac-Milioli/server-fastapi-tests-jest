const axios = require('axios');

describe('DELETE /objeto/:id', () => {
    it('should delete an object successfully', async () => {
        const response = await axios.delete('http://localhost:3000/objeto/1');
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ message: 'Object deleted successfully' });
    });

    it('should return 404 if the object does not exist', async () => {
        try {
            await axios.delete('http://localhost:3000/objeto/999');
        } catch (error) {
            expect(error.response.status).toBe(404);
            expect(error.response.data).toEqual({ error: 'Object not found' });
        }
    });

    it('should return 400 for invalid object ID', async () => {
        try {
            await axios.delete('http://localhost:3000/objeto/invalid-id');
        } catch (error) {
            expect(error.response.status).toBe(400);
            expect(error.response.data).toEqual({ error: 'Invalid ID' });
        }
    });
});