[
](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Q6yA_1B_vsdGWAAwB8Z7rA.png)![image](https://github.com/user-attachments/assets/f3554abe-1214-4c3f-b114-018148e55bd9)

# CNN(Convolutional Neural Network, 합성곱 신경망)이란?
이미지, 영상, 시계열 데이터 등에 강력한 성능을 보이는 딥러닝 구조
## 기초 개념
- 합성곱(Convolution): 이미지 특징을 추출하는 연산. 필터(kernel)을 통해 입력 데이터를 스캔. 
- 필터/커널: 입력 이미지에 적용되는 작은 행렬. 특징을 감지. 
- 패딩(Padding): 출력 크기를 조절하기 위해 가장자리에 값을 추가. 
- 스트라이드(Stride): 필터를 이동시키는 간격
- 풀링(Pooling): 공간 정보를 축소하여 계산량을 줄이고 불변성을 확보함 (보통 MaxPooling 사용)
- ReLU 활성화 함수: 음수는 0, 양수는 그대로. 비선형성 도입

## CNN 기본 구조
- 입력층
- 합성곱 층(Conv Layer)
- ReLU 층
- 풀링 층(Pooling Layer)
- 완전 연결층(Fully Connected, FC)
- 출력층(Softmax 등)

## 주요 활용 예
- 이미지 분류 
- 객체 탐지 (YOLO, R-CNN 계열)
- 얼굴 인식
- 의료 영상 분석
- 자율주행 차량의 시각 처리 등
