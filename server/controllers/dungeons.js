import { pool } from '../config/database.js'

export const getDungeons = async (req, res) => {
    try {
          const selectQuery = 'SELECT * FROM dungeons ORDER BY id ASC'
          const result = await pool.query(selectQuery)
            res.status(200).json(result.rows)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
}

export const getDungeonById = async (req, res) => {
    try {
        const { dungeonId } = req.params
        const selectQuery = 'SELECT * FROM dungeons WHERE id = $1'
        const result = await pool.query(selectQuery, [dungeonId])
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Dungeon not found' })
        }
        res.status(200).json(result.rows[0])
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default {
    getDungeons,
    getDungeonById
}