mkdir ./dist/proto

protoc -I=`pwd`/src/proto kkutu.proto \
    --js_out=import_style=commonjs,binary:`pwd`/dist/proto \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:`pwd`/dist/proto

protoc -I `pwd`/src/proto kkutu.proto \
    --plugin=protoc-gen-ts=`pwd`/node_modules/.bin/protoc-gen-ts.cmd \
    --ts_out=`pwd`/dist/proto

`pwd`/node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:`pwd`/dist/proto \
    --grpc_out=`pwd`/dist/proto -I `pwd`/src/proto `pwd`/src/proto/kkutu.proto
