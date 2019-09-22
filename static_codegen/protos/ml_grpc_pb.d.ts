// package: 
// file: protos/ml.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as protos_ml_pb from "../protos/ml_pb";

interface IMLBackendService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    classifyImage: IMLBackendService_IClassifyImage;
}

interface IMLBackendService_IClassifyImage extends grpc.MethodDefinition<protos_ml_pb.ImageClassificationRequest, protos_ml_pb.ImageClassificationResponse> {
    path: string; // "/.MLBackend/ClassifyImage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<protos_ml_pb.ImageClassificationRequest>;
    requestDeserialize: grpc.deserialize<protos_ml_pb.ImageClassificationRequest>;
    responseSerialize: grpc.serialize<protos_ml_pb.ImageClassificationResponse>;
    responseDeserialize: grpc.deserialize<protos_ml_pb.ImageClassificationResponse>;
}

export const MLBackendService: IMLBackendService;

export interface IMLBackendServer {
    classifyImage: grpc.handleUnaryCall<protos_ml_pb.ImageClassificationRequest, protos_ml_pb.ImageClassificationResponse>;
}

export interface IMLBackendClient {
    classifyImage(request: protos_ml_pb.ImageClassificationRequest, callback: (error: grpc.ServiceError | null, response: protos_ml_pb.ImageClassificationResponse) => void): grpc.ClientUnaryCall;
    classifyImage(request: protos_ml_pb.ImageClassificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_ml_pb.ImageClassificationResponse) => void): grpc.ClientUnaryCall;
    classifyImage(request: protos_ml_pb.ImageClassificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_ml_pb.ImageClassificationResponse) => void): grpc.ClientUnaryCall;
}

export class MLBackendClient extends grpc.Client implements IMLBackendClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public classifyImage(request: protos_ml_pb.ImageClassificationRequest, callback: (error: grpc.ServiceError | null, response: protos_ml_pb.ImageClassificationResponse) => void): grpc.ClientUnaryCall;
    public classifyImage(request: protos_ml_pb.ImageClassificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_ml_pb.ImageClassificationResponse) => void): grpc.ClientUnaryCall;
    public classifyImage(request: protos_ml_pb.ImageClassificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_ml_pb.ImageClassificationResponse) => void): grpc.ClientUnaryCall;
}
