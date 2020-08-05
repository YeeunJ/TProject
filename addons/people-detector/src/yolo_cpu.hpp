#ifndef YOLO_CPU
#define YOLO_CPU

#include <cstdio>
#include <cstdlib>
#include <vector>
#include <string>

#include <opencv2/core/mat.hpp>
#include <opencv2/dnn.hpp>
#include <opencv2/imgproc.hpp>
#include <opencv2/highgui.hpp>
#include <opencv2/imgcodecs.hpp>

#include <napi.h>

using namespace std;
using namespace cv;
using namespace dnn;

class Yolo_cpu : public Napi::ObjectWrap<Yolo_cpu> {
    private:
        string MODEL_PATH;
        string CFG_PATH;
        string CLASSES_PATH;
        float confThreshold = 0.4;
        float nmsThreshold = 0.5;
        Net net;
        vector<cv::String> outNames;
        
    public:
        static Napi::Object Init(Napi::Env env, Napi::Object exports);
        Yolo_cpu(const Napi::CallbackInfo& info);
    
    protected:
        Napi::Value start(const Napi::CallbackInfo& info);

    private:
        int doInference(const string imagePath, const int resize);
        int postProcess (Mat& frame, const vector<Mat>& outs);
        void imagePadding (Mat& frame);
};

#endif