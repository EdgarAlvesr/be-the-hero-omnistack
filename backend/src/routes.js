const express = require("express");

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);




// routes.get('/', (request, response) => {
//     return response.send("Hello World!");
// });

// routes.get('/users', (request, response) => {
//     const params = request.query;
//     console.log(params);
    
//     return response.json({
//         evento: "Semana OmniStack 11.0",
//         aluno: "Edgar Alves"
//     });
// });

// routes.get('/users/:id', (request, response) => {
//     const params = request.params;
    
//     console.log(params);
    
//     return response.json({
//         evento: "Semana OmniStack 11.0",
//         aluno: "Edgar Alves"
//     });
// });

// routes.post('/users', (request, response) => {
//     const body = request.body; // para pegar parâmetros body
    
//     console.log(body);
    
//     return response.json({
//         evento: "Users",
//         aluno: "Edgar Alves autoNodemon"
//     });
// });

module.exports = routes;