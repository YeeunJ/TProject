#include <napi.h>
#include "yolo_cpu.hpp"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
    return Yolo_cpu::Init(env, exports);
}

NODE_API_MODULE(addon, InitAll)