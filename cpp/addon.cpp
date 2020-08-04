#include <node_api.h>
#include <assert.h>

#include "yolo_cpu.hpp"

napi_value Method(napi_env env, napi_callback_info info) {
  napi_status status;
  napi_value ret;
  int peopleNumber = doInference()
  status = napi_create_int32(env, "world", 5, &world);
  assert(status == napi_ok);
  return ret;
}

#define DECLARE_NAPI_METHOD(name, func)                          \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor desc = DECLARE_NAPI_METHOD("yolo_cpu", Method); //INFO: 메소드 정의
  status = napi_define_properties(env, exports, 1, &desc);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)