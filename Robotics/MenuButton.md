# MenuButton
- 정의

  - 사용자가 클릭했을 때 드롭다운 메뉴(Dropdown Menu)를 열어주는 버튼 컴포넌트

  - 햄버거 아이콘(☰)이나 점 세 개 아이콘(⋮)이 바로 대표적인 MenuButton의 예시

  - 사용자가 이 버튼을 누르면, 그 아래로나 옆으로 숨겨져 있던 여러 메뉴 항목들이 나타남

- 역할과 구조

  MenuButton은 그 자체로 모든 기능을 하는 것이 아니라, Menu, MenuItem 과 같은 다른 컴포넌트들과 함께 작동하여 하나의 완성된 메뉴를 구성

  - MenuButton (또는 이 역할을 하는 일반 <Button>)

    역할: 메뉴를 열기 위한 방아쇠(Trigger). 사용자가 가장 먼저 상호작용하는 부분입니다.

    기능: 클릭 이벤트를 감지하여 메뉴의 열림/닫힘 상태를 제어합니다.

  - Menu

    역할: 메뉴 항목(MenuItem)들을 담는 보이지 않는 컨테이너(팝업창).

    기능: MenuButton에 의해 열리고 닫히며, 화면에서의 위치를 관리합니다.

  - MenuItem

    역할: 드롭다운 메뉴 안에 표시되는 개별 선택 항목. (예: 프로필, 설정, 로그아웃)

    기능: 사용자가 클릭하면 특정 동작을 실행합니다.

``` javascript

import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

function MyMenu() {
  // 1. Menu의 위치(anchor)와 열림/닫힘 상태를 관리
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl); // anchorEl이 있으면 true, 없으면 false

  // 2. 버튼을 클릭하면 Menu를 열고, 현재 버튼을 anchor로 설정
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // 3. Menu를 닫음
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {/* 이 버튼이 'MenuButton'의 역할을 합니다. */}
      <Button onClick={handleClick}>메뉴 열기</Button>

      {/* 이 부분이 숨겨져 있는 메뉴입니다. */}
      <Menu
        anchorEl={anchorEl} // 어느 버튼 아래에 나타날지 위치 지정
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>프로필</MenuItem>
        <MenuItem onClick={handleClose}>나의 계정</MenuItem>
        <MenuItem onClick={handleClose}>로그아웃</MenuItem>
      </Menu>
    </div>
  );
}

```
``` javascript

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

```
``` javascript

              <MenuButton
                disabled={!dataConnected || robotProgramRunning}
                onClick={() => setHomeCommandDialogOpen(true)}
              >
                <HomeIcon />
              </MenuButton>
            </span>
          </Tooltip>

          <Tooltip title={"이동"}>
            <span>
              <MenuButton
                disabled={!dataConnected || robotProgramRunning}
                onClick={() => setMoveDialogOpen(true)}
              >
                <OpenWithIcon />
              </MenuButton>

```


