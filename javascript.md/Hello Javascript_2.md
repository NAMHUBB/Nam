# 변수를 선언하는 규칙 3가지
1. 의미있는 이름 부여
2. Camel Case
3. 선언할 수 없는 이름들

# 변수에 값이나 식 작성하기
- 나이 계산 프로그램 만들기
```
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>나이 계산하기</title>
	<link rel="stylesheet" href="css/age.css">
</head>
<body>	
	<button class="btn" onclick="calc()">나이 계산하기</button>
	<div id="result" class="show">(결과 값 표시)</div>
	<script>
		function calc() {
			var currentYear = 2025;
			var birthYear = prompt("태어난 연도를 입력하세요.","YYYY");
			var age;
			age = currentYear - birthYear + 1;
			document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";
		}
	</script>
</body>
</html>
```
![image](https://github.com/user-attachments/assets/d0c05313-a0c0-4aed-bb1b-70cdfc29aeaa)
![image](https://github.com/user-attachments/assets/3e7b7b5f-e985-443a-bbec-247f90e72ff2)
![image](https://github.com/user-attachments/assets/a4331f0b-40b4-4a4b-b2d2-12efe4eda721)


# 자료형 이해
number
string
boolean
undefined
null
arrary
object

# 연산자 이해
더하기 (+)
빼기 (-)
곱하기 (*)
나누기 (/)
나머지 (%)
증가 (++): 변숫값을 1만큼 증가시킴.
감소 (--): 변숫값을 1만큼 감소시킴.

증감 연산자 예시
```전위 증가(++x)
let x = 5;
let y = ++x;  // x를 먼저 증가시키고, 증가된 값을 y에 대입
console.log(x); // 6
console.log(y); // 6
```

```후위 증가(x++)
let x = 5;
let y = x++;  // x의 현재 값을 y에 대입한 다음, x를 1 증가
console.log(x); // 6
console.log(y); // 5
```

- 할인 가격 계산 프로그램 만들기

```
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>할인 가격 구하기</title>
	<link rel="stylesheet" href="css/bargain.css">
</head>
<body>	
	<div id="contents">
		<img src="images/sale.png">
		<ul>
			<li>
					<label for="oPrice">원래 가격</label> 
					<input type="text" id="oPrice">원
			</li>
			<li>
				<label for="rate">할인율</label>
				<input type="text" id="rate">%
			</li>
			<li>
				<button onclick="showPrice()">할인 가격 계산하기</button>
			</li>
		</ul>
		<div id="showResult"></div>	
	</div>	
		
	<script>
		function showPrice() {
			var originPrice = document.querySelector('#oPrice').value;  // 원래 가격
			var rate = document.querySelector('#rate').value; // 할인율 
			var savedPrice = originPrice * (rate/100);  // 할인 금액
			var resultPrice = originPrice - savedPrice;  // 원래 가격에서 할인 금액을 뺀 최종 가격			
			document.querySelector('#showResult').innerHTML = "상품의 원래 가격은 " + originPrice + "원이고, 할인율은 " + rate + "%입니다." + savedPrice + "원을 절약한 " + resultPrice + "원에 살 수 있습니다."; 
		}		
		// if문 삭제했습니다.
	</script>
</body>
</html>
```
![image](https://github.com/user-attachments/assets/eeacc557-5429-452a-8589-0f44b82057fa)

# 할당 연산자

| 할당 연산자 | 예시       | 의미 (설명)                            |
| ------ | -------- | ---------------------------------- |
| `=`    | `x = 5`  | 변수 `x`에 5를 그대로 할당                  |
| `+=`   | `x += 3` | `x = x + 3` (기존 값에 3을 더함)          |
| `-=`   | `x -= 2` | `x = x - 2` (기존 값에서 2를 뺌)          |
| `*=`   | `x *= 4` | `x = x * 4` (기존 값에 4를 곱함)          |
| `/=`   | `x /= 2` | `x = x / 2` (기존 값을 2로 나눔)          |
| `%=`   | `x %= 3` | `x = x % 3` (기존 값을 3으로 나눈 나머지를 저장) |

```
let x = 10;
let y = 3;

console.log("초기값: x =", x, ", y =", y);

x = y;
console.log("x = y →", x);   // x: 3

x += y;
console.log("x += y →", x);  // x: 6 (3 + 3)

x -= y;
console.log("x -= y →", x);  // x: 3 (6 - 3)

x *= y;
console.log("x *= y →", x);  // x: 9 (3 * 3)

x /= y;
console.log("x /= y →", x);  // x: 3 (9 / 3)

x %= y;
console.log("x %= y →", x);  // x: 0 (3 % 3)

```
# 비교 연산자

| 비교 연산자 | 예시          | 의미 (설명)                 | 결과 (true/false) |
| ------ | ----------- | ----------------------- | --------------- |
| `==`   | `5 == "5"`  | 값만 비교 (느슨한 비교, 타입 변환 O) | `true`          |
| `===`  | `5 === "5"` | 값과 타입 모두 비교 (엄격한 비교)    | `false`         |
| `!=`   | `5 != "5"`  | 값이 다르면 true (타입 무시)     | `false`         |
| `!==`  | `5 !== "5"` | 값 또는 타입이 다르면 true       | `true`          |
| `>`    | `7 > 5`     | 왼쪽이 오른쪽보다 큰가?           | `true`          |
| `<`    | `3 < 5`     | 왼쪽이 오른쪽보다 작은가?          | `true`          |
| `>=`   | `5 >= 5`    | 왼쪽이 오른쪽보다 크거나 같은가?      | `true`          |
| `<=`   | `4 <= 3`    | 왼쪽이 오른쪽보다 작거나 같은가?      | `false`         |

- ==는 자료형을 변환한 후 값만 비교하고, ===는 자료형 변환 없이 값과 타입을 모두 비교
  
```
let x = 5;
let y = "5";
let z = 3;

console.log("x == y:", x == y);     // true
console.log("x === y:", x === y);   // false
console.log("x != y:", x != y);     // false
console.log("x !== y:", x !== y);   // true
console.log("x > z:", x > z);       // true
console.log("x < z:", x < z);       // false
console.log("x >= 5:", x >= 5);     // true
console.log("z <= 3:", z <= 3);     // true
```
# 논리 연산자

OR: ||
AND: &&
NOT: !

```
let a = true;
let b = false;

console.log("a && b:", a && b);   // false
console.log("a || b:", a || b);   // true
console.log("!a:", !a);           // false
console.log("!b:", !b);           // true
```

- 같은 분류일 떄 계산하는 순서

| 분류         | 1st  | 2nd  | 3rd  | 4th  | 5th  | 6th  | 7th   |   |   |
| ---------- | ---- | ---- | ---- | ---- | ---- | ---- | ----- | - | - |
| **단항 연산자** | `!`  | `++` | `--` |      |      |      |       |   |   |
| **산술 연산자** | `*`  | `/`  | `%`  | `+`  | `-`  |      |       |   |   |
| **비교 연산자** | `<`  | `<=` | `>`  | `>=` | `==` | `!=` | `===` |   |   |
| **논리 연산자** | `&&` | '||' |      |      |      |      |       |   |   |
| **할당 연산자** | `=`  | `+=` | `-=` | `*=` | `/=` | `%=` |       |   |   |


