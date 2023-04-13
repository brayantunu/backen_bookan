const { Pool } = require('pg')
const db = require('../../env')

const pool = new Pool(db)

exports.GetUsers = async () =>  {
    const user = await pool.query(`select * from "usuarios"`)

    return user.rows
}

//metho deprecated not useed