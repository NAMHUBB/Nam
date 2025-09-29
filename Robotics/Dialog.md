# Dialog 관련 주요 컴포넌트

## 1. Dialog
- 역할: 대화상자 전체를 감싸는 최상위 컨테이너
- 속성(props)
  - open: true면 대화상자가 화면에 보이고, false면 사라짐 (State로 제어)
  - onClose: 사용자가 대화상자 바깥쪽을 클릭했을 때 실행되는 함수로, 주로 대화상자를 닫는 데 사용됨
  - maxWidth: 대화상자의 최대 너비를 설정 (예: xs, sm, md)

## 2. DialogTitle
- 역할: 대화상자의 제목 영역
- 속성(props)
  - children:  제목으로 표시될 텍스트나 다른 컴포넌트를 넣음 (예: <DialogTitle>알림</DialogTitle>)
    
## 3. DialogContent
- 역할: 대화상자의 핵심 내용(본문)이 들어가는 영역. 스크롤이 필요한 긴 내용도 처리해줌
- 속성(props)
    - children:  설명 텍스트, 입력 필드(input), 이미지 등 다양한 내용을 넣을 수 있음
      
## 4. DialogContentText
- 역할: DialogContent 안에서 일반 텍스트를 표현할 때 사용. 일관된 디자인(폰트, 색상)을 적용해 줌
- 속성(props)
    - children: 본문에 표시될 설명 텍스트를 넣음
      
## 5. DialogActions
- 역할: '확인', '취소', '삭제' 등 사용자의 행동을 유도하는 버튼들이 위치하는 하단 영역
- 속성(props)
    - children: 주로 <Button> 컴포넌트들을 넣음. 버튼들을 오른쪽에 정렬하고 적절한 간격을 자동으로 만들어 줌

``` javascript
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

function MyDialogComponent() {
  // Dialog의 열림/닫힘 상태를 관리하는 state
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* 이 버튼을 누르면 Dialog가 열림 */}
      <Button variant="outlined" onClick={handleOpen}>
        삭제하기
      </Button>

      {/* Dialog 컴포넌트 본체 */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>정말로 삭제하시겠습니까?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            이 작업은 되돌릴 수 없습니다. 관련된 모든 데이터가 영구적으로
            삭제됩니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleClose} autoFocus>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

```
``` javascript
        <Dialog
        open={homeCommandDialogOpen}
        onClose={() => setHomeCommandDialogOpen(false)}
      >
        <DialogTitle>{"홈 위치로 이동"}</DialogTitle>
        <DialogContent>
          <DialogContentText>홈 위치로 이동하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setHomeCommandDialogOpen(false)}>취소</Button>
          <Button
            onClick={() => {
              setHomeCommandDialogOpen(false);
              send(
                "data",
                `movej([${settings.homePositionCommand.j1},${settings.homePositionCommand.j2},${settings.homePositionCommand.j3},${settings.homePositionCommand.j4},${settings.homePositionCommand.j5},${settings.homePositionCommand.j6}],a=${settings.homePositionCommand.a},v=${settings.homePositionCommand.v},t=0,r=0)\n`
              ).catch(() => {});
            }}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
```




