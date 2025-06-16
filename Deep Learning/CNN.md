# CNN(Convolutional Neural Network, 합성곱 신경망)이란?
이미지, 영상, 시계열 데이터 등에 강력한 성능을 보이는 딥러닝 구조

<br>

[
](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Q6yA_1B_vsdGWAAwB8Z7rA.png)![image](https://github.com/user-attachments/assets/f3554abe-1214-4c3f-b114-018148e55bd9)


### 기초 개념
- `합성곱(Convolution)`: 이미지 특징을 추출하는 연산. 필터(kernel)을 통해 입력 데이터를 스캔. 
- `필터/커널`: 입력 이미지에 적용되는 작은 행렬. 특징을 감지. 
- `패딩(Padding)`: 출력 크기를 조절하기 위해 가장자리에 값을 추가. 
- `스트라이드(Stride)`: 필터를 이동시키는 간격
- `풀링(Pooling)`: 공간 정보를 축소하여 계산량을 줄이고 불변성을 확보함 (보통 MaxPooling 사용)
- `ReLU 활성화 함수`: 음수는 0, 양수는 그대로. 비선형성 도입

### CNN 기본 구조
- `입력층 (Input Layer)`
  : 이미지 데이터를 입력받는 층.
- `합성곱 층(Convolutional Layer)`
  : 필터(커널)를 사용해 이미지의 특징을 추출.
- `활성화 함수층 (Activation Function Layer)`
  : 비선형성 부여. 대부분 ReLU 사용.
- `풀링 층(Pooling Layer)`
  : 특징 맵의 크기를 줄이는 작업. 주로 Max pooling 사용.
- `완전 연결층(Fully Connected Layer, FC)`
  : 추출된 특징을 바탕으로 최종 예측 수행.
- `출력층(Softmax 등)`
  : 분류 문제에서는 주로 Softmax 함수 사용하여 확률 출력.

### 주요 활용 예
- 이미지 분류 
- 객체 탐지 (YOLO, R-CNN 계열)
- 얼굴 인식
- 의료 영상 분석
- 자율주행 차량의 시각 처리 등
