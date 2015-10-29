var request = require('./handlers/get');

module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: require('./handlers/index'),
            description: 'Location where the server waits to receive a url parameter',
            notes: 'The host attribute on the uri parameter',
            tags: ['root', 'index']
        }
    },
    {
        method: 'GET',
        path: '/api/v1/address/{uri}',
        config: {
            handler: request.get,
            validate: require('./handlers/validate'),
            description: 'Get the website document or create it.',
            notes: 'The host attribute on the uri parameter',
            tags: ['queryset', 'get method', 'get or create methods']
        }
    }
];
