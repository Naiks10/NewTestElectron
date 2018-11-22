
function newsql(text) 
{
const config = {
    user: 'sa',
    password: '123',
    server: 'DESKTOP-12BNNTQ\\RVO', 
    database: 'ZAK_base',
}


const sql = require('mssql')
 
sql.connect(config).then(() => {
    return sql.query`SELECT * FROM SOVM_KOMP`
}).then(result => {
    console.dir(result);
    text.value = result[0].SOV_KOMP;
}).catch(err => {
    // ... error checks
})
 
sql.on('error', err => {
    // ... error handler
})
}