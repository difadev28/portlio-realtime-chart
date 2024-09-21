import express from "express"
import {chartJS, recharts} from "../controller/chart.controller.js"

const router = express.Router()

router.get("/chart-js", chartJS)
router.get("/recharts", recharts)

export default router;