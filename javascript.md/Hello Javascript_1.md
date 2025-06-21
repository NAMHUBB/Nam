# 입력한 이름을 이용해 환영 메시지를 출력하는 간단한 웹 페이지

```js
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Welcome</title>
	<style>
		body {
			font-size:1.3em;
			text-align: center;
		}
	</style>
</head>
<body>
	<h1>어서오세요</h1>	
	<script>
		var name = prompt("이름을 입력하세요.");
		document.write("<b><big>>"+ name + "</big></b>님, 환영합니다.");
	</script>
</body>
</html>
```

# 사용자 입력값 받기 - prompt() 함수
- 프롬프트 창의 텍스트 필드 안에 기본 값을 표시할 수 있음
```
prompt("이름을 입력하세요.","홍길동")
```
![image](https://github.com/user-attachments/assets/c5b2ddf1-4f7e-4cac-8ea9-e4fd8a31dfc1)

# 웹 브라우저 화면에 출력하기 - document.write()함수

```
var name = prompt("이름: ");
document.write(name+"님, 어서오세요!");
```
![image](https://github.com/user-attachments/assets/c411cd60-a974-496a-acbb-7f27f452048f)
![image](https://github.com/user-attachments/assets/c99e1ce1-5fe4-4c4d-9ec7-8086e8e7f91b)

# 알림 창으로 출력하기 - alert()함수

```
alert("환영합니다.");
```
![image](https://github.com/user-attachments/assets/998a812d-d0a3-4e6d-ac31-9e1585f213a6)

# 콘솔에 출력하기 - console.log()함수

```
var name = prompt("이름: ");
console.log(name+"님, 어서오세요!");
```

![image](https://github.com/user-attachments/assets/431281f2-3c94-46ce-a594-d834c1a05ce1)
![image](https://github.com/user-attachments/assets/31645881-7bc7-48b3-9318-feed8a9380e8)

# 자바스크립트 소스를 작성할 떄 지켜야 할 규칙
1. 대소문자를 구별하여 소스를 작성
2. 읽기 쉽게 들여 쓰는 습관 갖기
3. 세미콜론으로 문장을 구분
4. 자바스크립트 소스에 메모를 하려면 주석을 사용
5. 식별자는 정해진 규칙을 지켜 작성
6. 예약어는 식별자로 사용불가
(arguments, breake, case, continue, default, do, else, false, for, function,
if, null, return, super, switch, this, true, try, typeof, var, void, while, with)


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

