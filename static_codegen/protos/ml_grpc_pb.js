// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_ml_pb = require('../protos/ml_pb.js');

function serialize_ImageClassificationRequest(arg) {
  if (!(arg instanceof protos_ml_pb.ImageClassificationRequest)) {
    throw new Error('Expected argument of type ImageClassificationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ImageClassificationRequest(buffer_arg) {
  return protos_ml_pb.ImageClassificationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ImageClassificationResponse(arg) {
  if (!(arg instanceof protos_ml_pb.ImageClassificationResponse)) {
    throw new Error('Expected argument of type ImageClassificationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ImageClassificationResponse(buffer_arg) {
  return protos_ml_pb.ImageClassificationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MLBackendService = exports.MLBackendService = {
  // note: we might need to split the images into chunks
  classifyImage: {
    path: '/MLBackend/ClassifyImage',
    requestStream: false,
    responseStream: false,
    requestType: protos_ml_pb.ImageClassificationRequest,
    responseType: protos_ml_pb.ImageClassificationResponse,
    requestSerialize: serialize_ImageClassificationRequest,
    requestDeserialize: deserialize_ImageClassificationRequest,
    responseSerialize: serialize_ImageClassificationResponse,
    responseDeserialize: deserialize_ImageClassificationResponse,
  },
};

exports.MLBackendClient = grpc.makeGenericClientConstructor(MLBackendService);
