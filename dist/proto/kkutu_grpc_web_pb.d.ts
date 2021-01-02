import * as grpcWeb from 'grpc-web';

import * as kkutu_pb from './kkutu_pb';


export class KKuTuClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  gameSubscription(
    request: kkutu_pb.RequestGameSubscription,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<kkutu_pb.ResponseGameSubscription>;

  endGameSubscription(
    request: kkutu_pb.RequestEndGameSubscription,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<kkutu_pb.ResponseEndGameSubscription>;

}

export class KKuTuPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  gameSubscription(
    request: kkutu_pb.RequestGameSubscription,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<kkutu_pb.ResponseGameSubscription>;

  endGameSubscription(
    request: kkutu_pb.RequestEndGameSubscription,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<kkutu_pb.ResponseEndGameSubscription>;

}

