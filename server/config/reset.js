import { pool } from './database.js'
import './dotenv.js'
import DungeonData from '../data/dungeonData.js'



const createDungeonTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS dungeons;

        CREATE TABLE IF NOT EXISTS dungeons (
            id SERIAL PRIMARY KEY,
            date VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL,
            location VARCHAR(255) NOT NULL,
            level VARCHAR(50) NOT NULL,
            type VARCHAR(100) NOT NULL,
            image TEXT NOT NULL,
            description TEXT NOT NULL,
            health VARCHAR(50) NOT NULL,
            attack VARCHAR(50) NOT NULL
        );
    `
    try {
        await pool.query(createTableQuery)
        console.log('Dungeon table created successfully.')
    } catch (err) {
        console.error('Error creating dungeon table:', err)
    }
}   

const insertDungeonData = async () => {
    await createDungeonTable()

    for (const dungeon of DungeonData) {
        const insertQuery = {
            text: `INSERT INTO dungeons (name, date, location, level, type, image, description, health, attack)
                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`
        }

        const values = [
                dungeon.name,
                dungeon.date,
                dungeon.location,
                dungeon.level,
                dungeon.type,
                dungeon.image,
                dungeon.description,
                dungeon.Health,
                dungeon.Attack
            ]

        try {
            await pool.query(insertQuery, values)
            console.log(`Inserted dungeon: ${dungeon.name}`)
        } catch (err) {
            console.error('Error inserting dungeon data:', err)
        }
    }

    await pool.end()
}

insertDungeonData().catch((err) => {
    console.error('Error resetting dungeon data:', err)
    pool.end()
})