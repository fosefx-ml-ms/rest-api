// package: 
// file: protos/ml.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class ImageClassificationRequest extends jspb.Message { 
    getImage(): Uint8Array | string;
    getImage_asU8(): Uint8Array;
    getImage_asB64(): string;
    setImage(value: Uint8Array | string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageClassificationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImageClassificationRequest): ImageClassificationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageClassificationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageClassificationRequest;
    static deserializeBinaryFromReader(message: ImageClassificationRequest, reader: jspb.BinaryReader): ImageClassificationRequest;
}

export namespace ImageClassificationRequest {
    export type AsObject = {
        image: Uint8Array | string,
    }
}

export class ImageClassificationResponse extends jspb.Message { 
    getResultreadable(): string;
    setResultreadable(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageClassificationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImageClassificationResponse): ImageClassificationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageClassificationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageClassificationResponse;
    static deserializeBinaryFromReader(message: ImageClassificationResponse, reader: jspb.BinaryReader): ImageClassificationResponse;
}

export namespace ImageClassificationResponse {
    export type AsObject = {
        resultreadable: string,
    }
}
