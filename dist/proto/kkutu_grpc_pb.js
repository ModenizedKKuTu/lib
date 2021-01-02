// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var kkutu_pb = require('./kkutu_pb.js');

function serialize_kkutu_game_RequestEndGameSubscription(arg) {
  if (!(arg instanceof kkutu_pb.RequestEndGameSubscription)) {
    throw new Error('Expected argument of type kkutu.game.RequestEndGameSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kkutu_game_RequestEndGameSubscription(buffer_arg) {
  return kkutu_pb.RequestEndGameSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kkutu_game_RequestGameSubscription(arg) {
  if (!(arg instanceof kkutu_pb.RequestGameSubscription)) {
    throw new Error('Expected argument of type kkutu.game.RequestGameSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kkutu_game_RequestGameSubscription(buffer_arg) {
  return kkutu_pb.RequestGameSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kkutu_game_ResponseEndGameSubscription(arg) {
  if (!(arg instanceof kkutu_pb.ResponseEndGameSubscription)) {
    throw new Error('Expected argument of type kkutu.game.ResponseEndGameSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kkutu_game_ResponseEndGameSubscription(buffer_arg) {
  return kkutu_pb.ResponseEndGameSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kkutu_game_ResponseGameSubscription(arg) {
  if (!(arg instanceof kkutu_pb.ResponseGameSubscription)) {
    throw new Error('Expected argument of type kkutu.game.ResponseGameSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kkutu_game_ResponseGameSubscription(buffer_arg) {
  return kkutu_pb.ResponseGameSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}


var KKuTuService = exports.KKuTuService = {
  gameSubscription: {
    path: '/kkutu.game.KKuTu/GameSubscription',
    requestStream: false,
    responseStream: true,
    requestType: kkutu_pb.RequestGameSubscription,
    responseType: kkutu_pb.ResponseGameSubscription,
    requestSerialize: serialize_kkutu_game_RequestGameSubscription,
    requestDeserialize: deserialize_kkutu_game_RequestGameSubscription,
    responseSerialize: serialize_kkutu_game_ResponseGameSubscription,
    responseDeserialize: deserialize_kkutu_game_ResponseGameSubscription,
  },
  endGameSubscription: {
    path: '/kkutu.game.KKuTu/EndGameSubscription',
    requestStream: false,
    responseStream: false,
    requestType: kkutu_pb.RequestEndGameSubscription,
    responseType: kkutu_pb.ResponseEndGameSubscription,
    requestSerialize: serialize_kkutu_game_RequestEndGameSubscription,
    requestDeserialize: deserialize_kkutu_game_RequestEndGameSubscription,
    responseSerialize: serialize_kkutu_game_ResponseEndGameSubscription,
    responseDeserialize: deserialize_kkutu_game_ResponseEndGameSubscription,
  },
};

exports.KKuTuClient = grpc.makeGenericClientConstructor(KKuTuService);
