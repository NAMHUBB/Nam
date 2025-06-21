# 할인 계산기
```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>🛍 할인 계산기</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f6f9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      width: 320px;
      text-align: center;
      animation: fadeIn 1s ease-out;
    }
    input {
      width: 80%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    button:hover {
      background-color: #0056b3;
    }
    .result {
      margin-top: 20px;
      color: #333;
      font-weight: bold;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>할인 계산기</h2>
    <input type="number" id="price" placeholder="원래 가격 (₩)">
    <input type="number" id="rate" placeholder="할인율 (%)">
    <button onclick="calculate()">계산하기</button>
    <div class="result" id="output"></div>
  </div>

  <script>
    function calculate() {
      const price = parseFloat(document.getElementById('price').value);
      const rate = parseFloat(document.getElementById('rate').value);
      const output = document.getElementById('output');

      if (isNaN(price) || isNaN(rate) || price <= 0 || rate < 0 || rate > 100) {
        output.textContent = "❌ 올바른 값을 입력하세요.";
        output.style.color = "red";
        return;
      }

      const discount = price * (rate / 100);
      const final = price - discount;

      output.style.color = "#333";
      output.innerHTML = `
        원래 가격: ₩${price.toLocaleString()}<br>
        할인율: ${rate}%<br>
        할인 금액: ₩${discount.toLocaleString()}<br>
        <span style="color:#007bff;">최종 가격: ₩${final.toLocaleString()}</span>
      `;
    }
  </script>
</body>
</html>

```
### 변수 선언과 데이터 가져오기

```javascript 

const price = parseFloat(document.getElementById('price').value);
const rate = parseFloat(document.getElementById('rate').value);

```
| 문법 요소                           | 설명                    |
| ------------------------------- | --------------------- |
| `const`                         | 상수 선언 (재할당 불가)        |
| `document.getElementById('id')` | HTML 요소를 ID로 찾음       |
| `.value`                        | 입력창에 입력된 값을 가져옴 (문자열) |
| `parseFloat()`                  | 문자열을 실수형 숫자로 변환   |

<br>

### 조건문(if문)
```
if (isNaN(price) || isNaN(rate) || price <= 0 || rate < 0 || rate > 100) {
  // 오류 메시지 처리
}
```
| 문법 요소                | 설명                                |    |               |
| -------------------- | --------------------------------- | -- | ------------- |
| `if (...)`           | 조건이 참일 때 코드 실행                    |    |               |
| `isNaN()`            | 값이 숫자가 아닌 경우 true 반환              |    |               |
| \`                   |                                   | \` | **또는(OR)** 조건 |
| `&&`                 | **그리고(AND)** 조건 (이 예제엔 없지만 자주 쓰임) |    |               |
| `<=`, `>=`, `<`, `>` | 비교 연산자                            |    |               |

<br>

###  연산자
```javascript 
const discount = price * (rate / 100);
const final = price - discount;
```
| 연산자           | 의미                    |
| ------------- | --------------------- |
| `*`, `/`, `-` | 산술 연산자: 곱셈, 나눗셈, 뺄셈   |
| `=`           | 할당 연산자                |
| `()`          | 연산 우선순위 지정 (괄호 먼저 계산) |

<br>

###  문자출력 (DOM 조작)
```javascript
output.textContent = "문자열";
output.innerHTML = `템플릿 문자열`;
```
| 요소            | 설명                                |
| ------------- | --------------------------------- |
| `textContent` | HTML 없이 **순수 텍스트만 출력**            |
| `innerHTML`   | HTML 태그 포함하여 출력 가능                |
| 백틱(`` ` ``)   | **템플릿 리터럴**: `${변수}`로 문자열 안에 값 삽입 |

<br>

###  스타일 변경
```javascript
output.style.color = "red";
```
- `style.속성명 = 값` 으로 JS에서 직접 CSS 변경 가능
  
<br>

###  숫자 형식 지정
```javascript
price.toLocaleString()
```
- 숫자에 콤마(,) 추가 (예: 12000 → 12,000)
- `toLocaleString()`은 현지화된 숫자 포맷을 만들어줌








![image](https://github.com/user-attachments/assets/ab3728d7-e629-409f-bd74-effb0ac005ce)
![image](https://github.com/user-attachments/assets/1c669929-beec-4080-9e3b-7f25d077575d)
