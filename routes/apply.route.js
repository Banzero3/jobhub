import express from 'express'
import { applyControl } from '../controllers/apply.controller.js'
import { postControl } from '../controllers/postjob.controller.js'
const router=express.Router()

router.post("/apply",applyControl)
router.post("/post",postControl)
export default router