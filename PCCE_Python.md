### 문제: 시험 점수에 따른 등급 출력하기

```Python
score = int(input("점수를 입력하세요: "))
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")
elif score >= 60:
    print("D")
else:
    print("F")
```

### 문제: 놀이공원 입장 가능 여부

```Python
def check_entry():
    age = int(input("나이를 입력하세요: "))              # 예: 12
    height = int(input("키를 입력하세요(cm): "))         # 예: 135
    with_parent = input("보호자와 함께 오셨나요? (yes/no): ")  # 예: yes

    if (age >= 15 and height >= 140) or with_parent == "yes":
        print("입장 가능")
    else:
        print("입장 불가")
    
check_entry()
```

### 문제: 1부터 10까지 출력하기

```Python
for i in range(1, 11):
    print(i)
```
### 문제: 리스트 값 제곱 출력

```Python
numbers = [1, 2, 3, 4, 5]

# 각 요소의 제곱 출력
for num in numbers:
    print(num ** 2)

```

### 문제: 1부터 100까지 합 구하기

```Python
total = 0    # 누적합, 개수 세기, 최대값 저장 등을 위해 먼저 변수 선언
for i in range(1, 101):
    total += i

print("총합:", total)
```

### 문제: 리스트 안에서 짝수만 출력하기 

```Python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for num in numbers:
    if num % 2 == 0:  # num % 2 == 1은 홀수
        print(num)
```

### 문제: 1~100 사이의 홀수 총합 구하기

```Python
total = 0    # 누적합, 개수 세기, 최대값 저장 등을 위해 먼저 변수 선언
for i in range(1, 101):
    if i % 2 == 1:
        total += i
print("홀수 총합:", total)

```

### 문제: 구구단 출력 (2단)

```Python
# 2단 구구단 출력: 2 x 1 = 2 ~ 2 x 9 = 18
for i in range(1, 10):
    print(f"2 x {i} = {2 * i}")
```

### 문제: 사용자에게 단 입력받아 해당 구구단 출
```Python
dan = int(input("출력할 단을 입력하세요: "))

for i in range(1, 10):
    print(f"{dan} x {i} = {dan * i}")

```

### 문제: 문자열에서 모음만 출력

```Python
text = "hello python world"
vowels = "aeiou"

# 한 글자씩 순회하면서 모음만 출력
for ch in text:
    if ch in vowels:
        print(ch)

```












