# format 명령어
- MATLAB의 기본(default) 출력 형식. 소수점 이하 네 자리를 가진 고정소수점.
- 표시만 지정 한대로 할 뿐이고 실제 변수의 값이 바뀌는 것은 아님.

※예제 출력 (π ≈ 3.141592653589793)

**format short**: 소수점 이하 4자리까지 표시(기본값)
>format short
>
>pi
>
>ans =      
>
>3.1416

**format long**: 소수점 이하 15자리까지 표시
>format long
>
>pi
>
>ans =
>
>3.14159265358979

**format short e**: 소수점 4자리 + 지수 표기법
>format short e
>
>pi
>
>ans =
>
>3.1416e+00

**format long e**: 소수점 15자리 + 지수 표기법
>format long e
>
>pi
>
>ans =
>
>3.14159265358979e+00

**format short g**: 짧은 형식 (필요시 지수 표기)
>format short g
>
>pi
>
>ans =
>
>3.1416 or 1e+03

**format long g**: 긴 형식 (필요시 지수 표기)
>format long g
>
>pi
>
>ans =
>
>3.14159265358979 or 1.23456789012345e+10

※예제 출력 (1234.567)
**format bank**: 금융 계산용 (소수점 2자리)
>format bank
>
>1234.567
>
>ans =
>
>1234.57

**format compact**: 화면에 많은 정보가 표시되도록 하기 위해 빈 줄을 제거
>a = 10
>
>b = a^2
>
>a =
>    10
>b =
>   100

**format loose**: format compact와 반대로 결과 전후에 빈 줄을 삽입
>format loose
>
>a = 10
>
>b = a^2
>
>a =
>
>10
>
>b =
>
>100




