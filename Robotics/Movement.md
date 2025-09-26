# 로봇 이동 관련 표준 명령어

## 1. 관절 공간 이동 (Joint Movement)
**moveJ (Move Joint)**
: 로봇의 각 관절(축) 각도를 직접 지정하여 움직이는 방식입니다. 로봇이 가장 자연스럽고 빠르게 움직일 수 있지만, 로봇 팔 끝(End Effector)이 직선으로 움직이지 않고 곡선 궤적을 그립니다.

### 필요한 값
: 목표 관절 각도(Target Joint Angles), 속도(Velocity) 및 가속도(Acceleration)

``` javascript 
`movej([${settings.homePositionCommand.j1},
    ${settings.homePositionCommand.j2},
    ${settings.homePositionCommand.j3},
    ${settings.homePositionCommand.j4},
    ${settings.homePositionCommand.j5},
    ${settings.homePositionCommand.j6}],
    a=${settings.homePositionCommand.a},
    v=${settings.homePositionCommand.v},
    t=0,r=0)\n`

// [${settings.homePositionCommand.j1}, ...,${settings.homePositionCommand.j6}] 이 배열은 각 관절의 목표 각도를 담고 있음
// j1 - j6까지 각 축이 몇 도(degree)까지 회전해야 하는 지를 지
// ${settings.homePositionCommand.j1}와 같은 코드는 미리 설정된 '홈 포지션'의 j1(1번 축) 각도 값을 가져와 명령어에 삽입하라는 의미
// a=${settings.homePositionCommand.a}는 가속도로, 로봇이 정지 상태에서 설정된 목표 속도까지 얼마나 빨리 도달할지를 결정
// v=${settings.homePositionCommand.v}는 속도를 의미하며, 로봇 관절이 목표 각도를 향해 움직이는 최대 속도를 지정
// t=0, r=0: 이동 시간을 지정하지 않고(t=0), 목표 지점에서 정확히 정지(r=0)하라는 의미

```


## 2. 직선 이동 (Linear Movement)
**moveL (Move Linear)**
:로봇 팔 끝(End Effector)이 현재 위치에서 목표 위치까지 직선 경로를 그리며 움직이는 방식입니다. 로봇은 직선 경로를 유지하기 위해 내부적으로 여러 관절의 각도를 복잡하게 계산합니다.

### 필요한 값
: 목표 좌표(Target Pose), 속도(Velocity) 및 가속도(Acceleration)
``` javascript 
`movel(p[${currentTargetTcp.X / 1000},${               
                    currentTargetTcp.Y / 1000
                  },${currentTargetTcp.Z / 1000},${
                    currentTargetTcp.Rx * DEG2RAD
                  },${currentTargetTcp.Ry * DEG2RAD},${
                    currentTargetTcp.Rz * DEG2RAD
                  }],a=${parseFloat(getInputValue("a"))},v=${parseFloat(
                    getInputValue("v")
                  )},t=0,r=0)\n`

// p는 pose를 의미, 로봇 팔 끝이 도달해야 할 목표 위치(X, Y, Z)와 방향(Rx, Ry, Rz)를 지정
// ${currentTargetTcp.X / 1000}에서 좌표 값을 1000으로 나누는 이유는 단위를 맞추기 위함. UI에서는 밀리미터(mm)단위로 좌표를 맞추고, 로봇 컨트롤러는 미터(m)단위를 기본으로 
// ${currentTargetTcp.Rx * DEG2RAD}에서 방향 값(Rx, Ry, Rz)을 DEG2RAD와 곱하는 이유는 단위 변환을 하기 위함. UI에서 사람이 이해하기 쉬운 도(Degree)단위를 사용하고, 로봇 컨트롤러는 수학 계산에 용이한 라디안(Radian)단위를 사용하기 때문.
// (DEG2RAD는 π / 180일듯)
// getInputValue("v"), getInputValue("a")는 UI입력 필드에서 속도와 가속도를 가져옴
// parseFloat(...)는 getInputValue를 통해 가져온 값은 문자열(string)형태이므로, parseFloat함수를 사용해 소수점까지 인식하는 숫자(number)형태로 반환하여 명령어를 넣어
// t=0, r=0: 이동 시간을 지정하지 않고(t=0), 목표 지점에서 정확히 정지(r=0)하라는 의미

```
## 3. 원호 이동 (Circular Movement)
**moveC (Move Circular)**
:로봇 팔 끝이 두 지점을 통과하는 원호(arc)를 그리며 움직이는 방식입니다.

### 필요한 값
: 경유 지점(Via Point), 목표 지점(Target Point), 속도(Velocity) 및 가속도(Acceleration)





