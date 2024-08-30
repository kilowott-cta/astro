const { app } = require('@azure/functions');

app.http('naut', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const name = request.query.get('name') || await request.text() || 'world';

        const content = JSON.stringify({ "name": `Hello, ${name}`})
        return { body: content };
    }
});
