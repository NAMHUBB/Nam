# 타자 속도 테스트기 1
```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>⌨️ 타자 속도 테스트기</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f4f4;
      text-align: center;
      padding: 50px;
    }
    .test-box {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      max-width: 600px;
      margin: auto;
    }
    #sentence {
      font-size: 1.2em;
      margin-bottom: 20px;
      color: #333;
    }
    #input {
      width: 100%;
      padding: 10px;
      font-size: 1.1em;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    #result {
      margin-top: 20px;
      font-weight: bold;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #0d47a1;
    }
  </style>
</head>
<body>
  <div class="test-box">
    <h2>⌨️ 타자 속도 테스트기</h2>
    <div id="sentence">문장을 불러오는 중...</div>
    <input type="text" id="input" placeholder="여기에 문장을 입력하세요" oninput="checkTyping()">
    <div id="result"></div>
    <button onclick="startTest()">🔁 새 문장으로 시작</button>
  </div>

  <script>
    const sentences = [
      "자바스크립트는 웹의 핵심 언어입니다.",
      "프로그래밍은 문제 해결의 기술입니다.",
      "매일 조금씩 배우는 것이 중요합니다.",
      "코딩은 창의력과 논리력을 함께 키웁니다.",
      "실패를 두려워하지 말고 시도하세요."
    ];

    let startTime = 0;
    let currentSentence = "";

    function startTest() {
      const index = Math.floor(Math.random() * sentences.length);
      currentSentence = sentences[index];
      document.getElementById("sentence").innerText = currentSentence;
      document.getElementById("input").value = "";
      document.getElementById("result").innerText = "";
      startTime = new Date().getTime(); // 시작 시간 기록
    }

    function checkTyping() {
      const input = document.getElementById("input").value;
      if (input === currentSentence) {
        const endTime = new Date().getTime();
        const timeInSeconds = (endTime - startTime) / 1000;
        const wordCount = currentSentence.split(" ").length;
        const wpm = Math.round((wordCount / timeInSeconds) * 60);
        document.getElementById("result").innerText =
          `✅ 완료! 걸린 시간: ${timeInSeconds.toFixed(2)}초 / WPM: ${wpm}`;
      }
    }

    // 초기 실행
    startTest();
  </script>
</body>
</html>

```
### 문장 데이터 정의
```javascript 
const sentences = [ ... ];
```
- 테스트에 사용할 예시 문장들을 배열로 저장합니다.
- `const`: 변경되지 않는 상수
- 배열에 저장된 문장 중 하나가 매번 무작위로 출력됩니다.

### 변수 초기화
```javascript 
let startTime = 0;
let currentSentence = "";
```
- `startTime`: 사용자가 타이핑을 시작한 시간(ms 단위) 저장
- `currentSentence`: 현재 사용자에게 보여지는 문장 저장
- `let`: 재할당 가능한 변수 선언

### 테스트 시작 함수
```javascript 
function startTest() {
  const index = Math.floor(Math.random() * sentences.length);
```
- 랜덤으로 문장 선택: `Math.random()`은 0~1 사이의 랜덤 숫자
- `Math.floor()`는 소수점 아래 버림 (정수로 변환)

```javascript 
  currentSentence = sentences[index];
  document.getElementById("sentence").innerText = currentSentence;
```
- 선택된 문장을 `currentSentence`에 저장
- HTML의 `<div id="sentence">`에 출력

```javascript 
  document.getElementById("input").value = "";
  document.getElementById("result").innerText = "";
```
- 입력창과 결과창 초기화 (빈칸으로 리셋)

```javascript 
  startTime = new Date().getTime();
```
- 타이머 시작: 현재 시간을 ms 단위로 기록

### 타이핑 함수 확인
```javascript 
function checkTyping() {
  const input = document.getElementById("input").value;
```
- 사용자가 입력한 내용을 실시간으로 가져옵니다


```javascript
  if (input === currentSentence) {
```
- 입력한 내용이 정답 문장과 완전히 같을 경우에만 아래 실행

```javascript
    const endTime = new Date().getTime();
    const timeInSeconds = (endTime - startTime) / 1000;
```

- 입력 완료 시점의 시간 저장
- 경과 시간(초) = 끝 시간 - 시작 시간 / 1000

```javascript
    const wordCount = currentSentence.split(" ").length;
```
- 문장을 공백 기준으로 나누어 단어 수 계산

```javascript
    const wpm = Math.round((wordCount / timeInSeconds) * 60);
```
- WPM(분당 단어 수) 계산
- 1초 동안 입력한 단어 수 × 60 = WPM
- Math.round()는 소수점 반올림

```javascript
    document.getElementById("result").innerText =
      `✅ 완료! 걸린 시간: ${timeInSeconds.toFixed(2)}초 / WPM: ${wpm}`;
```
- 결과 문장을 HTML에 출력
- `.toFixed(2)`는 소수점 둘째 자리까지 출력

### 초기 실행
```javascript
startTest();
```
- 페이지가 로드될 때 자동으로 한 문장이 선택되어 표시됩니다






![image](https://github.com/user-attachments/assets/f95d209b-0a15-40e4-a1ab-cd9beeb07766)
![image](https://github.com/user-attachments/assets/865742af-8429-4ab2-b8db-da29ad224a08)
![image](https://github.com/user-attachments/assets/6f4e7b2e-aabf-4eac-b622-b75e95a26f8c)

# 타자 속도 테스트기 2
```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>⌨️ 타자 속도 테스트기</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f4f4f4;
      text-align: center;
      padding: 50px;
    }
    .test-box {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      max-width: 600px;
      margin: auto;
    }
    #sentence {
      font-size: 1.2em;
      margin-bottom: 20px;
      color: #333;
    }
    #input {
      width: 100%;
      padding: 10px;
      font-size: 1.1em;
      border: 2px solid #ccc;
      border-radius: 6px;
      outline: none;
      transition: border-color 0.2s ease;
    }
    #input.error {
      border-color: red;
    }
    #input.correct {
      border-color: green;
    }
    #result {
      margin-top: 20px;
      font-weight: bold;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      background: #1976d2;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #0d47a1;
    }
  </style>
</head>
<body>
  <div class="test-box">
    <h2>⌨️ 타자 속도 테스트기</h2>
    <div id="sentence">문장을 불러오는 중...</div>
    <input type="text" id="input" placeholder="여기에 문장을 입력하세요" oninput="checkTyping()">
    <div id="result"></div>
    <button onclick="startTest()">🔁 새 문장으로 시작</button>
  </div>

  <script>
    const sentences = [
      "자바스크립트는 웹의 핵심 언어입니다.",
      "프로그래밍은 문제 해결의 기술입니다.",
      "매일 조금씩 배우는 것이 중요합니다.",
      "코딩은 창의력과 논리력을 함께 키웁니다.",
      "실패를 두려워하지 말고 시도하세요."
    ];

    let startTime = 0;
    let currentSentence = "";

    function startTest() {
      const index = Math.floor(Math.random() * sentences.length);
      currentSentence = sentences[index];
      document.getElementById("sentence").innerText = currentSentence;
      document.getElementById("input").value = "";
      document.getElementById("result").innerText = "";
      document.getElementById("input").className = "";
      startTime = new Date().getTime();
    }

    function checkTyping() {
      const inputEl = document.getElementById("input");
      const input = inputEl.value;

      // 실시간 오타 체크
      if (currentSentence.startsWith(input)) {
        inputEl.className = "correct";
      } else {
        inputEl.className = "error";
      }

      // 입력 완료 시
      if (input === currentSentence) {
        const endTime = new Date().getTime();
        const timeInSeconds = (endTime - startTime) / 1000;
        const wordCount = currentSentence.split(" ").length;
        const wpm = Math.round((wordCount / timeInSeconds) * 60);

        // 정확도 계산
        let correctCount = 0;
        for (let i = 0; i < input.length; i++) {
          if (input[i] === currentSentence[i]) correctCount++;
        }
        const accuracy = Math.round((correctCount / currentSentence.length) * 100);

        document.getElementById("result").innerText =
          `✅ 완료! 걸린 시간: ${timeInSeconds.toFixed(2)}초 / WPM: ${wpm} / 정확도: ${accuracy}%`;

        inputEl.className = "correct";
      }
    }

    // 처음 실행 시 문장 표시
    startTest();
  </script>
</body>
</html>

```

### `startsWith()` — 실시간 오타 체크

```javascript 
if (currentSentence.startsWith(input)) {
  inputEl.className = "correct";
} else {
  inputEl.className = "error";
}
```
| 항목                                  | 설명                                  |
| ----------------------------------- | ----------------------------------- |
| `startsWith()`                      | 문자열이 특정 문자열로 시작하는지 확인하는 **문자열 메서드** |
| `currentSentence.startsWith(input)` | 사용자의 입력이 정답 문장의 앞부분과 일치하는지 판단       |
| `inputEl.className = "correct"`     | 입력창에 초록색 테두리 적용 (CSS 클래스 변경)        |
| `inputEl.className = "error"`       | 입력이 틀리면 빨간 테두리 적용                   |

 - **실시간 반응형 오타 감지 로직**
 
### `for` 반복문 + 문자 비교 — 정확도 계산

```javascript 
let correctCount = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] === currentSentence[i]) correctCount++;
}
```
| 문법 요소                             | 설명                               |
| --------------------------------- | -------------------------------- |
| `for` 루프                          | 문자 하나하나 비교하기 위해 반복               |
| `input[i] === currentSentence[i]` | 입력한 문자와 정답 문장 문자를 **같은 위치에서 비교** |
| `correctCount++`                  | 맞은 글자 수 하나 증가                    |

` 이 부분은 **정확하게 입력된 문자 수**를 세는 핵심 로직

### 정확도 계산식

```javascript
const accuracy = Math.round((correctCount / currentSentence.length) * 100);
```
| 항목                       | 설명             |
| ------------------------ | -------------- |
| `correctCount`           | 정확히 일치한 글자 수   |
| `currentSentence.length` | 전체 문장 글자 수     |
| `/ * 100`                | 백분율로 변환        |
| `Math.round()`           | 소수점 반올림 → 정수 % |

- 결과적으로 **"정확도 % 계산"** 이 됩니다.

### `.className = "..."` — CSS 클래스 변경

```javascript
inputEl.className = "correct"; // 또는 "error"
```

| 항목                      | 설명                           |
| ----------------------- | ---------------------------- |
| `inputEl`               | `<input>` 요소를 DOM으로 가져온 객체   |
| `.className`            | 요소의 `class` 속성을 JS로 설정       |
| `"correct"` / `"error"` | CSS에서 정의한 클래스 이름 (초록/빨강 테두리) |

-  **입력창 스타일을 동적으로 바꿈**





