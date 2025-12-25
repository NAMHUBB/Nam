### HTTP & HTTPS

---

#### HTTP (HyperText Transfer Protocol)

- **설명**

HTTP는 인터넷에서 데이터를 주고받는 가장 기본적인 프로토콜. 

HTML 문서, 이미지, 동영상 등을 브라우저로 가져올 때 사용.

- **특징**

데이터를 평문(Plain Text)으로 전송.

암호화되지 않은 상태이기 때문에 중간에 누군가 신호를 가로채면(Packet Sniffing) 내용을 들여다볼 수 있음.

기본 포트: 80번

#### HTTPS (HyperText Transfer Protocol Secure)

- **설명**

HTTPS는 기존 HTTP에 **보안 계층(SSL/TLS)**을 추가하여 데이터를 암호화한 버전. 

대부분의 웹사이트는 HTTPS를 표준으로 사용.

- **특징**

모든 데이터를 암호화하여 전송.

중간에 해커가 데이터를 가로채더라도 암호화된 난수만 보이기 때문에 내용을 알 수 없음.

SSL/TLS 인증서가 필요하며, 이를 통해 접속한 사이트가 신뢰할 수 있는 사이트임을 증명.

기본 포트: 443번




















