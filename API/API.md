## API (Application Programming Interface)


---


### API의 정의

- 두 소프트웨어 구성 요소가 서로 통신할 수 있게 하는 메커니즘


### API의 종류

- **REST API**: HTTP 프로토콜을 사용하여 데이터를 주고받는 방식
  - 특징: 가장 대중적. 자원(Resource)을 URI로 표현. HTTP 메서드(GET, POST 등) 사용.
    
- **SOAP API**: XML 기반의 메시지를 주고받는 프로토콜
  - 특징: 엄격한 보안과 트랜잭션. 금융권, 대기업 레거시 시스템에서 주로 사용. 구조가 무겁고 복잡함.

- **SOAP API**: 클라이언트가 필요한 데이터 구조를 정의하여 요청
  - 특징: 오버페칭/언더페칭 방지. 하나의 엔드포인트에서 원하는 데이터만 쿼리 가능. Meta(Facebook)에서 개발. 

- **RPC (gRPC)**: 원격 프로시저 호출 (함수를 호출하듯 사용)
  - 특징: 고성능 통신 (주로 내부 MSA 통신에 사용). Google의 gRPC(Protocol Buffers 사용)가 대표적.

### API의 쓰임새

- 데이터 공유 및 제공:

  - 기상청 API: 날씨 정보를 받아와 내 앱에 보여줌.

  - 공공데이터 API: 버스 도착 정보, 미세먼지 농도 등.

- 기능 확장 및 연동:

  - 소셜 로그인: '카카오로 로그인', 'Google로 로그인' (OAuth 사용).

  - 결제 연동: Stripe, Toss Payments API 등을 통해 결제 기능 구현.

- 시스템 통합 (MSA):

  - 거대한 시스템을 작은 서비스 단위(Microservices)로 쪼개고, 각 서비스끼리 API로 통신하여 시스템을 구성.


