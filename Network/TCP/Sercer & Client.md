
### 서버(Server) 코드

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

``` Python
import socket
import time

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind(('localhost', 8080))
server.listen(1)

print("Step 1: [대기] 서버가 8080번 포트에서 귀를 기울이고 있습니다...")

conn, addr = server.accept()
print(f"Step 2: [연결 완료] {addr} 주소의 손님이 입장했습니다!")

while True:
    data = conn.recv(1024).decode()
    if not data: break
    print(f"Step 3: [수신] 손님이 보낸 메시지: {data}")
    
    time.sleep(1) # 시각적인 확인을 위해 1초 대기
    conn.send("메시지 잘 받았다!".encode())
    print("Step 4: [응답] 확인 메시지를 보냈습니다.")

conn.close()
print("Step 5: [종료] 통신이 끝났습니다.")

```


### 클라이언트(Client) 코드

``` Python
import socket

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect(('localhost', 8080)) # 서버에 접속

client.send("안녕 서버! 내 목소리 들리니?".encode())
response = client.recv(1024).decode()
print(f"서버의 응답: {response}")

client.close()
```
 

