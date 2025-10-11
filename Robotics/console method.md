# console method

## 1. console.log()
: 일반 출력, 변수 값/상태 확인

## 2. console.info()
: 정보성 메세지 출력

## 3. console.warn()
: 경고 메세지 (노란색)

## 4. console.error()
: 에러 메세지 (빨간색), 코드 오류 추적

## 5. console.table()
: 데이터 표 출력, 데이터 시각화

## 6. console.clear()
: 콘솔 창 비우기, 디버깅 전후 처리


``` javascript

console.log("기본 메시지");
console.info("정보 메시지");
console.warn("경고 메시지!");
console.error("에러 발생!");

const data = [
  { id: 1, name: "Arm", angle: 45 },
  { id: 2, name: "Base", angle: 90 },
];
console.table(data);

console.time("loop");  // 시간 측정 시작
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop"); // 경과 시간 출력

console.clear(); // 콘솔 비우기


```


