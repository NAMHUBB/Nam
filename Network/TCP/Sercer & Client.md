
### 서버(Server) 코드 만들기

``` Python
import socket

# 1. 소켓 생성 (IPv4, TCP 방식)
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# 2. 내 컴퓨터의 8080 포트에 연결
server.bind(('localhost', 8080))
server.listen(1)
print("서버가 시작되었습니다. 클라이언트를 기다리는 중...")

# 3. 클라이언트 접속 수락
conn, addr = server.accept()
print(f"연결됨: {addr}")

# 4. 데이터 받고 인사하기
data = conn.recv(1024).decode()
print(f"받은 메시지: {data}")
conn.send("안녕, 나는 맥 서버야!".encode())

conn.close()
```

### 클라이언트(Client) 코드 만들기

``` Python
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 8080)) # 서버에 접속

client.send("안녕 서버! 내 목소리 들리니?".encode())
response = client.recv(1024).decode()
print(f"서버의 응답: {response}")

client.close()
```
