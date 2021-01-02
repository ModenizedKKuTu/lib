// package: kkutu.game
// file: kkutu.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as kkutu_pb from "./kkutu_pb";

interface IKKuTuService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    gameSubscription: IKKuTuService_IGameSubscription;
    endGameSubscription: IKKuTuService_IEndGameSubscription;
}

interface IKKuTuService_IGameSubscription extends grpc.MethodDefinition<kkutu_pb.RequestGameSubscription, kkutu_pb.ResponseGameSubscription> {
    path: "/kkutu.game.KKuTu/GameSubscription";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<kkutu_pb.RequestGameSubscription>;
    requestDeserialize: grpc.deserialize<kkutu_pb.RequestGameSubscription>;
    responseSerialize: grpc.serialize<kkutu_pb.ResponseGameSubscription>;
    responseDeserialize: grpc.deserialize<kkutu_pb.ResponseGameSubscription>;
}
interface IKKuTuService_IEndGameSubscription extends grpc.MethodDefinition<kkutu_pb.RequestEndGameSubscription, kkutu_pb.ResponseEndGameSubscription> {
    path: "/kkutu.game.KKuTu/EndGameSubscription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<kkutu_pb.RequestEndGameSubscription>;
    requestDeserialize: grpc.deserialize<kkutu_pb.RequestEndGameSubscription>;
    responseSerialize: grpc.serialize<kkutu_pb.ResponseEndGameSubscription>;
    responseDeserialize: grpc.deserialize<kkutu_pb.ResponseEndGameSubscription>;
}

export const KKuTuService: IKKuTuService;

export interface IKKuTuServer {
    gameSubscription: grpc.handleServerStreamingCall<kkutu_pb.RequestGameSubscription, kkutu_pb.ResponseGameSubscription>;
    endGameSubscription: grpc.handleUnaryCall<kkutu_pb.RequestEndGameSubscription, kkutu_pb.ResponseEndGameSubscription>;
}

export interface IKKuTuClient {
    gameSubscription(request: kkutu_pb.RequestGameSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kkutu_pb.ResponseGameSubscription>;
    gameSubscription(request: kkutu_pb.RequestGameSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kkutu_pb.ResponseGameSubscription>;
    endGameSubscription(request: kkutu_pb.RequestEndGameSubscription, callback: (error: grpc.ServiceError | null, response: kkutu_pb.ResponseEndGameSubscription) => void): grpc.ClientUnaryCall;
    endGameSubscription(request: kkutu_pb.RequestEndGameSubscription, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kkutu_pb.ResponseEndGameSubscription) => void): grpc.ClientUnaryCall;
    endGameSubscription(request: kkutu_pb.RequestEndGameSubscription, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kkutu_pb.ResponseEndGameSubscription) => void): grpc.ClientUnaryCall;
}

export class KKuTuClient extends grpc.Client implements IKKuTuClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public gameSubscription(request: kkutu_pb.RequestGameSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kkutu_pb.ResponseGameSubscription>;
    public gameSubscription(request: kkutu_pb.RequestGameSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<kkutu_pb.ResponseGameSubscription>;
    public endGameSubscription(request: kkutu_pb.RequestEndGameSubscription, callback: (error: grpc.ServiceError | null, response: kkutu_pb.ResponseEndGameSubscription) => void): grpc.ClientUnaryCall;
    public endGameSubscription(request: kkutu_pb.RequestEndGameSubscription, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: kkutu_pb.ResponseEndGameSubscription) => void): grpc.ClientUnaryCall;
    public endGameSubscription(request: kkutu_pb.RequestEndGameSubscription, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: kkutu_pb.ResponseEndGameSubscription) => void): grpc.ClientUnaryCall;
}
