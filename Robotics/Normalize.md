## normalizeNumberInputOnChange

: 실시간으로 숫자, 마이너스, 소수점 이외의 문자를 필터링

## normalizeNumberInputOnBlur

: 입력을 마쳤을 때 중복된 소수점을 제거하거나 앞의 불필요한 0을 지워 최종 숫자로 확정

## normalizeRange

: 입력값을 최소~최대 범위(예: 0-180도)로 제한

## normalizeVector

: 방향 벡터의 길이를 1로 맞춤

## normalizeScale

: 0-255 사이의 센서 값을 0-1(백분율)로 변환

## quaternion.normalize() 
※ 수학적 정규화
/  입력창과는 상관없이, 3D 회전 계산을 정확하게 하기 위해 벡터의 크기를 1로 만드는 과정

: 'quaternionToAxisAngle' 함수 내부에서 사용. 

: 쿼터니언 연산 전에 데이터의 오차를 보정하여 회전 계산이 정확하게 이루어지도록 만듦
