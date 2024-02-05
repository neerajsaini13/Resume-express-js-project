import express from 'express';
import colors from 'colors';
import web from './routes/web.js'
import { join } from 'path'
const app = express();
const port = process.env.PORT || 8080


// SET EJS
app.set("view engine", "ejs")

app.use(express.static(join(process.cwd(), "public")))

// ROUTES 
app.use("/", web)

app.listen(port, () => {
    console.log(`server start http://localhost:${port}`.rainbow)
})