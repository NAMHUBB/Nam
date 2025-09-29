# Tooltip
- 정의: 사용자가 마우스 커서를 특정 UI 요소(아이콘, 버튼, 텍스트 등) 위에 올렸을 때 나타나는 작은 말풍선 형태의 도움말 상자
- 역할과 목적
  - 아이콘 버튼 설명: 텍스트 없이 아이콘으로만 이루어진 버튼이 어떤 기능을 하는지 알려줍니다. (예: ⚙️ 아이콘 위에 "설정" 툴팁 표시)
  - 잘린 텍스트 전체 보기: 공간이 부족해 ...으로 잘린 긴 텍스트 위에 마우스를 올리면 전체 내용을 보여줍니다.
  - 추가적인 힌트 제공: 비활성화된 버튼 위에 마우스를 올렸을 때, 왜 비활성화되었는지 이유를 설명해 줍니다. (예: "모든 필드를 입력해야 활성화됩니다.")
- 핵심 사용 원칙
  - 짧고 간결하게
  - 필수 정보는 담지 않기
  - 상호작용은 피하기
  - 즉각적인 도움 주기
  
``` javascript

          <Tooltip
            title={
              robotMessage.robotMode === ROBOT_MODE.POWER_OFF ||
              robotMessage.robotMode === 0
                ? "전원 켜기"
                : "전원 끄기"
            }
          >
            <span>
              <MenuButton
                disabled={!controlConnected}
                onClick={() => {
                  if (
                    robotMessage.robotMode === ROBOT_MODE.POWER_OFF ||
                    robotMessage.robotMode === 0
                  ) {
                    send("control", "power on\n")
                      .then(async () => {
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        send("control", "brake release\n").catch(() => {});
                      })
                      .catch(() => {});
                  } else {
                    send("control", "power off\n").catch(() => {});
                  }
                }}
              >
                <PowerSettingsNewIcon
                  color={
                    !controlConnected
                      ? "disabled"
                      : robotMessage.robotMode === ROBOT_MODE.POWER_OFF ||
                        robotMessage.robotMode === 0
                      ? "inherit"
                      : "primary"
                  }
                />
              </MenuButton>
            </span>
          </Tooltip>

```
``` javascript

          <Tooltip title={"비상 정지"}>
            <span>
              <MenuButton
                disabled={!controlConnected}
                onClick={() => {
                  send("control", "power off\n").catch(() => {});
                }}
              >
                <DangerousIcon
                  color={
                    !controlConnected
                      ? "disabled"
                      : robotMessage.jointMode.some((mode) => mode === 1)
                      ? "error"
                      : "inherit"
                  }
                />
              </MenuButton>
            </span>
          </Tooltip>

```



























