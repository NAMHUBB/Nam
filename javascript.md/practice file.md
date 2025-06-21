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


