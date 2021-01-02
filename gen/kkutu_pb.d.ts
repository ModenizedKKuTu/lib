import * as jspb from 'google-protobuf'



export class RequestGameSubscription extends jspb.Message {
  getKey(): string;
  setKey(value: string): RequestGameSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestGameSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: RequestGameSubscription): RequestGameSubscription.AsObject;
  static serializeBinaryToWriter(message: RequestGameSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestGameSubscription;
  static deserializeBinaryFromReader(message: RequestGameSubscription, reader: jspb.BinaryReader): RequestGameSubscription;
}

export namespace RequestGameSubscription {
  export type AsObject = {
    key: string,
  }
}

export class ResponseGameSubscription extends jspb.Message {
  getMessagetype(): string;
  setMessagetype(value: string): ResponseGameSubscription;

  getResponsetime(): number;
  setResponsetime(value: number): ResponseGameSubscription;

  getMessage(): string;
  setMessage(value: string): ResponseGameSubscription;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseGameSubscription.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseGameSubscription): ResponseGameSubscription.AsObject;
  static serializeBinaryToWriter(message: ResponseGameSubscription, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseGameSubscription;
  static deserializeBinaryFromReader(message: ResponseGameSubscription, reader: jspb.BinaryReader): ResponseGameSubscription;
}

export namespace ResponseGameSubscription {
  export type AsObject = {
    messagetype: string,
    responsetime: number,
    message: string,
  }
}

