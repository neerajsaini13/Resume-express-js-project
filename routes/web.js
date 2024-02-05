import express from 'express';
const router = express.Router();
import HomeController from '../controllers/HomeController.js'
import AboutController from '../controllers/AboutController.js'
import ContactController from '../controllers/ContactController.js';



router.get("/", HomeController)
router.get("/about", AboutController)
router.get("/contact", ContactController)



export default router