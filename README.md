<<<<<<< HEAD
# TProject
=======
# people-detector
Module for node.js, based on OpenCV DNN, YOLO and COCO dataset.

# Dependencies
- Linux
- OpenCV 4.1.3 >= (with pkgconfig)
- node-gyp

# Install
1. Initialize project
~~~
$ npm init -y
~~~


2. Install node packages in project
~~~
$ npm install bindings node-addon-api
~~~


3. Configure node-gyp
~~~
$ node-gyp configure
~~~


4. Build module
~~~
$ node-gyp build
~~~


5. Get YOLOv3 pre-trained model
~~~
$ sh getModel.sh
~~~

>>>>>>> 63871ccaf0a6ce88c45e9e5296be68c7c0667cb3
