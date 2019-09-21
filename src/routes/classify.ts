import {Request, Response} from "express";
import { simpleJsonErrorResponse } from "../utils";


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

    // todo send to ml backend
    response.end();
}
