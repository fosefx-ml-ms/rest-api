import {Request, Response} from "express";
import { simpleJsonErrorResponse } from "../utils";
import { MLBackend } from "../app";
import { ImageClassificationRequest, ImageClassificationResponse } from "../../static_codegen/protos/ml_pb";


const ALLOWED_MIME = ["image/jpeg", "image/png"];

export default function(request: Request, response: Response) {
    console.debug("Called classify");
    console.debug(request.file);
    if (!request.file) {
        return simpleJsonErrorResponse(400, "'image' field missing", response);
    }
    
    if (ALLOWED_MIME.find(s => s === request.file.mimetype) == null) {
        return simpleJsonErrorResponse(400, "type is not supported", response);
    }

    if (request.file.size > 500000) {
        return simpleJsonErrorResponse(400, "image is too big", response);
    }

    const r = new ImageClassificationRequest();
    r.setImage(request.file.buffer);
    MLBackend.classifyImage(r, (error, mlResponse: ImageClassificationResponse) => {
        if (error) {
            console.warn(error);
            return response.status(500).json({error: error.message}).end();
        }
        const readableResult = mlResponse.getResultreadable();
        console.info("Identified " + readableResult);
        
        return response.json({data: {result: readableResult}}).end();
    });
}
