import { app, HttpRequest, HttpResponse, HttpResponseInit, InvocationContext } from "@azure/functions";

let user = null;

async function getUser(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('Http function was triggered.');

    const mock = await fetch('https://randomuser.me/api/');
    const data = await mock.json();
    //user = data.results[0];

    const response = new HttpResponse({ jsonBody: data });
    response.headers.set('content-type', 'application/json');
    return response;
};

app.http('user', {
    methods: ['GET', 'POST'],
    handler: getUser
});