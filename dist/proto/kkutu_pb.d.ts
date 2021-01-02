// package: kkutu.game
// file: kkutu.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class RequestGameSubscription extends jspb.Message { 
    getKey(): string;
    setKey(value: string): RequestGameSubscription;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestGameSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: RequestGameSubscription): RequestGameSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
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

export class RequestEndGameSubscription extends jspb.Message { 
    getKey(): string;
    setKey(value: string): RequestEndGameSubscription;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequestEndGameSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: RequestEndGameSubscription): RequestEndGameSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RequestEndGameSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequestEndGameSubscription;
    static deserializeBinaryFromReader(message: RequestEndGameSubscription, reader: jspb.BinaryReader): RequestEndGameSubscription;
}

export namespace RequestEndGameSubscription {
    export type AsObject = {
        key: string,
    }
}

export class ResponseEndGameSubscription extends jspb.Message { 
    getResponsetime(): number;
    setResponsetime(value: number): ResponseEndGameSubscription;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseEndGameSubscription.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseEndGameSubscription): ResponseEndGameSubscription.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseEndGameSubscription, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseEndGameSubscription;
    static deserializeBinaryFromReader(message: ResponseEndGameSubscription, reader: jspb.BinaryReader): ResponseEndGameSubscription;
}

export namespace ResponseEndGameSubscription {
    export type AsObject = {
        responsetime: number,
    }
}
