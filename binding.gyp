{
  "targets": [
    {
      'target_name': "people-detector",
      'cflags!': [ "-fno-exceptions" ],
      'cflags': [ "-std=c++11" ], 
      'cflags_cc!': [ "-fno-exceptions" ],
      'sources': [ "src/jsoncpp/jsoncpp.cpp", "src/addon.cpp", "src/yolo_cpu.cpp" ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")", "`pkg-config --cflags opencv4`", "-I/src/jsoncpp/", "-DJSON_IS_AMALGAMATION"],
      'libraries': [ "`pkg-config --libs opencv4`" ], 
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
    }
  ]
}