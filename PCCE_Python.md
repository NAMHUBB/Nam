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

### 문제: 1부터 100까지 합 구하기

```Python
total = 0
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
total = 0
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















