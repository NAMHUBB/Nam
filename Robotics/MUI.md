## GlobalStyles API

Web이 아닌 Application처럼 보이게 만드는 Componeent API

``` javascript
  <GlobalStyles
        styles={{
          body: {
            ":not(input):not(textarea),:not(input):not(textarea)::after,:not(input):not(textarea)::before":
              {
                userSelect: "none",
                cursor: "default",
              },
          },
        }}
      />
```
- **":not(input):not(textarea),:not(input):not(textarea)::after,:not(input):not(textarea)::before":**

: 입력창(input)만은 드래그가 되도록 제외

- **userSelect: "none"**

: 드래그를 해서 파랗게 영역이 잡히는 것을 방지

- **cursor: "default"**

: 글자 위에 마우스를 올리면 커서가 I자 모양(텍스트 선택 모드)으로 변하는데, 이를 방지하고 일반 화살표 모양이 유지
