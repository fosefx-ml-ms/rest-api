import * as express from "express";
import * as bodyParser from "body-parser";
import * as helmet from "helmet";
import classify from "./routes/classify";
import * as multer from "multer";
import * as grcp from "grpc";
import {MLBackendClient} from "../static_codegen/protos/ml_grpc_pb";
import * as fs from "fs";

// get certificate
const path = "./secret/certificate.crt";
const bytes = fs.readFileSync(path);

// init gRCP connection
export const MLBackend = new MLBackendClient("localhost:50051", grcp.credentials.createSsl(bytes));

export const app = express();

export const upload = multer({storage: multer.memoryStorage()});

app.use(helmet())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.post("/", upload.single('image') , classify);
app.get("*", (_, res) => res.status(405).json({error: "Method not allowed", descr: "Use POST / with the body of image=<your image file>"}).end());