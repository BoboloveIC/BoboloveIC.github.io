安装OpenCV

```
pacman -S mingw-w64-x86_64-opencv
pacman -S --needed base-devel vim tar wget unzip protobuf
export MINGW_PACKAGE_PREFIX=mingw-w64-x86_64
pacman -S --needed base-devel vim tar wget unzip protobuf
 
pacman -S --needed \
			${MINGW_PACKAGE_PREFIX}-cmake \
			${MINGW_PACKAGE_PREFIX}-gcc \
			${MINGW_PACKAGE_PREFIX}-toolchain \
			${MINGW_PACKAGE_PREFIX}-boost \
			${MINGW_PACKAGE_PREFIX}-ccache \
			${MINGW_PACKAGE_PREFIX}-eigen3 \
			${MINGW_PACKAGE_PREFIX}-gcc-libgfortran \
			${MINGW_PACKAGE_PREFIX}-gtk3 \
			${MINGW_PACKAGE_PREFIX}-julia \
			${MINGW_PACKAGE_PREFIX}-ogre3d \
			${MINGW_PACKAGE_PREFIX}-python \
			${MINGW_PACKAGE_PREFIX}-python2 \
			${MINGW_PACKAGE_PREFIX}-python-pip \
			${MINGW_PACKAGE_PREFIX}-python-numpy \
			${MINGW_PACKAGE_PREFIX}-vtk
pacman -S --needed \
			${MINGW_PACKAGE_PREFIX}-libpng \
			${MINGW_PACKAGE_PREFIX}-libjpeg \
			${MINGW_PACKAGE_PREFIX}-libtiff \
			${MINGW_PACKAGE_PREFIX}-libwebp
pacman -S --needed \
			${MINGW_PACKAGE_PREFIX}-dlib \
			${MINGW_PACKAGE_PREFIX}-ffmpeg \
			${MINGW_PACKAGE_PREFIX}-harfbuzz \
			${MINGW_PACKAGE_PREFIX}-lapack \
			${MINGW_PACKAGE_PREFIX}-openblas \
			${MINGW_PACKAGE_PREFIX}-opencl-clhpp \
			${MINGW_PACKAGE_PREFIX}-opencl-headers \
			${MINGW_PACKAGE_PREFIX}-opencl-icd \
			${MINGW_PACKAGE_PREFIX}-openmp
 
# optional
pacman -S  --needed \
			${MINGW_PACKAGE_PREFIX}-tesseract-ocr \
			${MINGW_PACKAGE_PREFIX}-tesseract-data-chi_sim \
			${MINGW_PACKAGE_PREFIX}-tesseract-data-chi_tra

```

下载OpenCV,并安装

```
	wget -O opencv.zip https://github.com/opencv/opencv/archive/refs/tags/4.10.0.zip

	wget -O opencv_contrib.zip https://github.com/opencv/opencv_contrib/archive/refs/tags/4.10.0.zip
	unzip opencv.zip
	unzip opencv_contrib.zip
```

编写编译脚本

```
#!/bin/bash
 
BUILD_DIR=${1:-build}
export OpenBLAS_HOME=/mingw64
export  PATH=/mingw64/lib:/mingw64/bin:/mingw64/include:$PATH
 
[ -e ${BUILD_DIR} ] && rm -r ${BUILD_DIR}/* || mkdir ${BUILD_DIR} 
 
cmake  -B${BUILD_DIR} \
	-DOPENCV_EXTRA_MODULES_PATH=opencv_contrib-4.10.0/modules \
	-DCMAKE_CXX_EXTENSIONS=ON -DCMAKE_CXX_STANDARD=14 \
	-DWITH_OBSENSOR=OFF \
	-DWITH_OPENGL=ON \
	-DWITH_QT=OFF \
	-DWITH_GSTREAMER=ON \
	-DWITH_OPENCL=ON \
	-DOPENCV_ENABLE_NONFREE=ON \
	opencv-4.10.0
 
# Build
[ $? -eq 0 ] &&  cmake --build ${BUILD_DIR} -j 8

```

编译失败，参考：

```
https://blog.csdn.net/tonyfield2015/article/details/133406390
```

