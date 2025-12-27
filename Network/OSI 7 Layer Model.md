## OSI 7 Layer Model (OSI 7계층 모델)

국제표준화기구(ISO)에서 정의한 네트워크 통신 표준 모델로, 통신 과정을 7단계로 나누어 각 계층의 역할과 범위를 규정합니다.

### 📊 계층별 상세 구조

| 영역 | 계층 (Layer) | 이름 (Name) | 핵심 역할 (Core Role) | 주요 프로토콜 및 장비 (My Tech Stack) |
| :---: | :---: | :--- | :--- | :--- |
| **SW** | **7** | **Application**<br>(응용 계층) | 사용자가 실제로 이용하는 응용 프로그램과 인터페이스 | **HTTP / HTTPS**, **WebSocket**, FTP, SSH, Telnet |
| **SW** | **6** | **Presentation**<br>(표현 계층) | 데이터의 변환, 압축, **암호화/복호화** | SSL/TLS (HTTPS의 보안), JPEG, MPEG |
| **SW** | **5** | **Session**<br>(세션 계층) | 통신 연결의 수립, 유지, 동기화 제어 | **API**, Socket (세션 관리) |
| **전송** | **4** | **Transport**<br>(전송 계층) | 데이터의 **전송 신뢰성** 보장 및 포트 번호 식별 | **TCP**, UDP, Gateway |
| **전송** | **3** | **Network**<br>(네트워크 계층) | 논리적 주소(IP) 할당 및 최적 경로 설정(**라우팅**) | **IP**, ICMP, 라우터(Router) |
| **HW** | **2** | **Data Link**<br>(데이터 링크 계층) | 물리적 주소(MAC) 식별 및 노드 간 신뢰성 있는 전송 | **Ethernet**, **CAN**, 스위치(Switch), 브리지 |
| **HW** | **1** | **Physical**<br>(물리 계층) | 데이터를 전기적 신호(0, 1)로 변환하여 전송 | **LAN 케이블(UTP)**, **CAN Bus 라인**, 리피터, 허브 |

---

### 💡 주요 기술 위치 요약

- **Web Application Stack:**
  - **L7 (Application):** HTTP, HTTPS, WebSocket (브라우저와 서버 간 통신)
  - **L6 (Presentation):** SSL/TLS (HTTPS 암호화 처리)

- **Network Infrastructure & Embedded:**
  - **L3 (Network):** IP (서로 다른 네트워크 간의 경로 탐색)
  - **L2 (Data Link):** **Ethernet** (PC/서버 LAN 표준), **CAN** (로봇/자동차 제어 네트워크 표준)
  - **L1 (Physical):** 물리적인 케이블 연결 및 전압 신호 처리

### 💡 왜 중요한가? 
현대의 인터넷은 더 단순하고 실용적인 **TCP/IP 모델**을 표준으로 따르고 있지만, OSI 7계층 모델은 여전히 네트워크 엔지니어링의 핵심 개념으로 사용.

- **호환성 (Compatibility)**
  - 서로 다른 벤더(Vendor)의 하드웨어와 소프트웨어 제품들이 표준 규칙에 따라 상호 운용.
- **트러블슈팅 (Troubleshooting)**
  - 네트워크 장애 발생 시, 문제의 원인을 계층별로 나누어 분석 가능.

---

### 🔄 데이터 전송 흐름 (Encapsulation Flow)
데이터 통신 시, 보내는 쪽과 받는 쪽은 서로 **반대 방향**으로 계층을 타고 이동.

**1. 보낼 때: 캡슐화 (Encapsulation)**
> **Direction: `L7 (Application)` ➡ `L1 (Physical)`**
- 사용자가 사용하는 **L7 애플리케이션**에서 시작하여 아래 계층으로 내려감.
- 각 계층을 지날 때마다 데이터 앞부분에 **헤더(Header)**가 붙음.
- 데이터는 단계적으로 **패킷화, 프레임화** 과정을 거치며, 최종적으로 **L1 물리 계층**에서 **비트(Bit)** 신호로 변환되어 케이블을 통해 전송.

**2. 받을 때: 역캡슐화 (Decapsulation)**
> **Direction: `L1 (Physical)` ➡ `L7 (Application)`**
- **L1 물리 계층**에서 전기적 비트 신호를 받는 것으로 시작하여 위 계층으로 올라감.
- 각 계층마다 헤더를 분석하고 제거하며 프레임, 패킷, 세그먼트를 순차적으로 해석.
- 최종적으로 **L7 애플리케이션 계층**에 도달하면 사람이 읽을 수 있는 원본 데이터로 변환되어 화면에 표시.


