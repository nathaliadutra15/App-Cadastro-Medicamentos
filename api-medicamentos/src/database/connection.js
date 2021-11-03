var knex = require('knex')({
    client: 'mysql',
    connection: {
        host : 'localhost',      
        user : 'root',      
        password : '12345',  
        database : 'drlembrete'    
     }
});
module.exports = knex