const express = require('express')
const DatabaseConnection = require('./providers/DatabaseConnection')

const { SERVER_PORT } = require('../config')

const app = express()
const db = new DatabaseConnection()

const databaseInitialization = (async () => {
    const tablesResults = await db.query("SHOW TABLES WHERE Tables_in_sample LIKE 'people'")

    if (tablesResults == 0) {
        console.log('Creating and seeding table')
        await db.query('CREATE TABLE people(id int not null auto_increment, name varchar(255), primary key(id))')
        await db.query("INSERT INTO people(name) values('Wesley')")
        await db.query("INSERT INTO people(name) values('Lucas')")
        console.log('Table created')
    }
})()

app.get('/', async (req,res) => {
    await databaseInitialization

    const results = await db.query("SELECT * FROM people")

    const content = `
        <h1>Full Cycle Rocks!</h1>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            ${results.map(row => `
                <tr>
                    <td>#${row.id}</td>
                    <td>${row.name}</td>
                </tr>
            `).join("")}
        </table>
    `

    res.send(content)
})

app.listen(SERVER_PORT, () => {
    console.log('Rodando na porta ' + SERVER_PORT)
})
