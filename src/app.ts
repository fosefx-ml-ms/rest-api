import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import classify from "./routes/classify";
import * as multer from "multer";

export const app = express();

export const upload = multer({storage: multer.memoryStorage()});

app.use(helmet())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.post("/", upload.single('image') , classify);
app.get("*", (_, res) => res.status(405).json({error: "Method not allowed", descr: "Use POST / with the body of image=<your image file>"}).end());