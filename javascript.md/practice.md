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
![image](https://github.com/user-attachments/assets/ab3728d7-e629-409f-bd74-effb0ac005ce)
![image](https://github.com/user-attachments/assets/1c669929-beec-4080-9e3b-7f25d077575d)
