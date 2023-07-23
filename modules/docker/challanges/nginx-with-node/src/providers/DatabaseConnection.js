const mysql = require('mysql')
const { MYSQL_DATABASE, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD } = require('../../config')

class DatabaseConnection {
    constructor() {
        this.config = {
            host: MYSQL_HOST,
            user: MYSQL_USER,
            password: MYSQL_PASSWORD,
            database: MYSQL_DATABASE
        }
    }

    async query(sqlQuery) {
        const queryPromise = async (sql) => new Promise((resolve, reject) => {
            connection.query(sql, (error, results, fields) => {
                if (error) return reject(error)
                resolve(results)
            })
        })

        const connection = mysql.createConnection(this.config)

        const results = await queryPromise(sqlQuery)

        connection.end()

        return results
    }
}

module.exports = DatabaseConnection
