mkdir %CD%\dist\proto

protoc -I=%CD%/src/proto kkutu.proto --js_out=import_style=commonjs,binary:%CD%/dist/proto --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:%CD%/dist/proto
protoc -I=%CD%/src/proto kkutu.proto --plugin=protoc-gen-ts=%CD%\node_modules\.bin\protoc-gen-ts.cmd --ts_out=%CD%/dist/proto
%CD%/node_modules/.bin/grpc_tools_node_protoc --js_out=import_style=commonjs,binary:%CD%/dist/proto --grpc_out=%CD%/dist/proto -I %CD%/src/proto kkutu.proto
