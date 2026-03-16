import express from 'express'
// import controllers for events and locations
import dungeonsController from '../controllers/dungeons.js'


const router = express.Router()

// define routes to get events and locations


router.get('/', dungeonsController.getDungeons)

router.get('/:dungeonId', dungeonsController.getDungeonById)


export default router