# 1. 활성함수란 무엇인가?

뉴런이 받은 입력을 어떻게 변환해 다음 층으로 전달할지 결정하는 함수

# 2. 활성함수가 필요한 이유
- 비선형성 부여
   
복잡한 패턴(곡선, 엣지, 사물 형태)을 표현 가능.

- Deep Learning 가능

계층을 깊게 쌓아도 같은 직선이면 깊어도 의미 없음 → 활성함수가 딥러닝을 가능하게 만듦.

- 특징 강조/억제

필요한 특징은 크게, 불필요한 특징은 작게 함.

# 3. 주요 활성함수 정리

1️⃣ Sigmoid

수식:

<img width="250" height="136" alt="image" src="https://github.com/user-attachments/assets/33e97439-7be8-4278-b95c-6d20210ca158" />

- 범위: 0 ~ 1

- 확률처럼 해석 가능

- 단점: 기울기 소실(Vanishing Gradient)

- 사용: 이진 분류 출력층

2️⃣ Tanh

수식:

<img width="302" height="136" alt="image" src="https://github.com/user-attachments/assets/da654415-d43e-4972-a47f-a1cff13b0fc0" />

- 범위: -1 ~ 1

- Sigmoid보다 학습 안정적

- 여전히 기울기 소실 존재

- 사용: RNN 구조

3️⃣ ReLU (Rectified Linear Unit)

수식:

<img width="318" height="136" alt="image" src="https://github.com/user-attachments/assets/a0684da3-898c-4547-ac92-0ddc2caa454d" />

- 가장 흔히 사용되는 활성함수

- 빠르고 단순, 기울기 소실 해결

- 단점: Dead ReLU 문제

- 사용: CNN 대부분의 은닉층

ResNet, MobileNet 등 현대 모델

4️⃣ Leaky ReLU

- 음수 영역도 0.01x 만큼 통과시켜 ReLU의 단점 개선.

- 사용: GAN, CNN 일반 모델

5️⃣ Softmax

- 여러 클래스 확률 출력

- 출력 합 = 1

- 사용: 다중 분류 문제의 출력층

6️⃣ Swish

수식:

<img width="242" height="136" alt="image" src="https://github.com/user-attachments/assets/7114571e-1d12-4184-97dd-5a7084ee2fa9" />

- Google이 제안
  
- ReLU보다 높은 정확도
  
- EfficientNet에서 사용










