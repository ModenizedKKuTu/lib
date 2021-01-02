protoc -I=src/proto kkutu.proto \
    --js_out=import_style=commonjs,binary:gen \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:gen