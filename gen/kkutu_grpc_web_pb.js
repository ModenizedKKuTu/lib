/**
 * @fileoverview gRPC-Web generated client stub for kkutu.game
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.kkutu = {};
proto.kkutu.game = require('./kkutu_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kkutu.game.KKuTuClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.kkutu.game.KKuTuPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.kkutu.game.RequestGameSubscription,
 *   !proto.kkutu.game.ResponseGameSubscription>}
 */
const methodDescriptor_KKuTu_GameSubscription = new grpc.web.MethodDescriptor(
  '/kkutu.game.KKuTu/GameSubscription',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.kkutu.game.RequestGameSubscription,
  proto.kkutu.game.ResponseGameSubscription,
  /**
   * @param {!proto.kkutu.game.RequestGameSubscription} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kkutu.game.ResponseGameSubscription.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.kkutu.game.RequestGameSubscription,
 *   !proto.kkutu.game.ResponseGameSubscription>}
 */
const methodInfo_KKuTu_GameSubscription = new grpc.web.AbstractClientBase.MethodInfo(
  proto.kkutu.game.ResponseGameSubscription,
  /**
   * @param {!proto.kkutu.game.RequestGameSubscription} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.kkutu.game.ResponseGameSubscription.deserializeBinary
);


/**
 * @param {!proto.kkutu.game.RequestGameSubscription} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kkutu.game.ResponseGameSubscription>}
 *     The XHR Node Readable Stream
 */
proto.kkutu.game.KKuTuClient.prototype.gameSubscription =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kkutu.game.KKuTu/GameSubscription',
      request,
      metadata || {},
      methodDescriptor_KKuTu_GameSubscription);
};


/**
 * @param {!proto.kkutu.game.RequestGameSubscription} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.kkutu.game.ResponseGameSubscription>}
 *     The XHR Node Readable Stream
 */
proto.kkutu.game.KKuTuPromiseClient.prototype.gameSubscription =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/kkutu.game.KKuTu/GameSubscription',
      request,
      metadata || {},
      methodDescriptor_KKuTu_GameSubscription);
};


module.exports = proto.kkutu.game;

