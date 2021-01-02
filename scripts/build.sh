protoc -I=src/proto kkutu.proto \
    --js_out=import_style=commonjs,binary:dist/proto \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:dist/proto