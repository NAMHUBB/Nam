# Radio
- 정의
  
  여러 선택지 중 단 하나만 고를 수 있는 동그란 모양의 버튼이며, RadioGroup은 이러한 Radio 버튼들을 하나의 그룹으로 묶어주는 컨테이너

- Radio와 Radiogroup의 관계

  - Radio

    역할: 개별 선택 항목을 나타내는 버튼.

    기능: 각자 고유한 값(value)을 가집니다. (예: "사과", "바나나", "오렌지")

  - RadioGroup

    역할: 여러 <Radio> 버튼을 감싸는 그룹.

    기능: 그룹 내에서 어떤 항목이 선택되었는지 그 '값(value)'을 관리. 사용자가 다른 라디오 버튼을 클릭하면, RadioGroup이 선택된 값을 변경하고 모든 자식 Radio 버튼들의 선택 상태를 업데이트.

- 핵심 작동 원리
  
  - 상태 관리: RadioGroup은 현재 그룹 내에서 어떤 Radio의 값이 선택되었는지를 하나의 상태 변수(selectedValue)로 관리

  - 값 비교: 각 Radio 컴포넌트는 RadioGroup의 selectedValue와 자신의 value를 비교

  - 선택 표시: 만약 RadioGroup의 값과 자신의 값이 일치하면, 스스로 '선택된' 상태(체크 표시)로 화면에 표시

  - 상태 변경: 사용자가 아직 선택되지 않은 Radio 버튼을 클릭하면, RadioGroup의 onChange 이벤트가 발생. 이 이벤트는 RadioGroup의 selectedValue를 새로 클릭된 Radio의 값으로 변경하고, 이 변경 사항은 그룹 내 모든 Radio 버튼에 다시 전파

``` javascript

import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from '@mui/material';

function FruitSelector() {
  // RadioGroup이 관리할 선택된 과일의 값을 저장하는 state
  const [selectedValue, setSelectedValue] = useState('apple');

  // RadioGroup의 값이 변경될 때 실행되는 함수
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    // FormControl과 FormLabel은 그룹의 제목을 붙여주는 보조적인 역할
    <FormControl>
      <FormLabel>가장 좋아하는 과일은?</FormLabel>
      
      {/* RadioGroup이 전체 선택 상태를 관리 */}
      <RadioGroup value={selectedValue} onChange={handleChange}>
        {/* FormControlLabel은 Radio 버튼과 라벨 텍스트를 묶어줌 */}
        <FormControlLabel value="apple" control={<Radio />} label="사과" />
        <FormControlLabel value="banana" control={<Radio />} label="바나나" />
        <FormControlLabel value="orange" control={<Radio />} label="오렌지" />
      </RadioGroup>
    </FormControl>
  );
}

```

```javascript

            <RadioGroup
              row
              value={moveMode}
              onChange={(event) =>
                setMoveMode(event.target.value as "relative" | "absolute")
              }
            >
              <FormControlLabel
                value="relative"
                control={<Radio disabled={robotProgramRunning} />}
                label="상대 좌표"
              />
              <FormControlLabel
                value="absolute"
                control={<Radio disabled={robotProgramRunning} />}
                label="절대 좌표"
              />
            </RadioGroup>

```












