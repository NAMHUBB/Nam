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
