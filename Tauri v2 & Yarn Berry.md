## Tauri v2 & Yarn Berry


https://v2.tauri.app/ko/

- Tauri는 웹 기술(HTML, CSS, JS)을 이용해 데스크톱과 모바일 앱을 만들게 해주는 도구.

- 초경량화: 기존의 Electron(디스코드, 슬랙 등)은 앱 하나당 크롬 브라우저를 통째로 담아 무거웠지만, Tauri는 운영체제에 내장된 웹뷰를 사용하여 파일 크기가 매우 작고 메모리 사용량이 적dma.

- 보안과 성능 (Rust): 앱의 핵심 로직(백엔드)은 Rust라는 매우 안전하고 빠른 언어로 작성됩니다. v2로 오면서 모바일(iOS, Android) 지원이 강력해졌음.

- 다리 역할: 웹(Frontend)에서 시스템 기능(파일 읽기, 알림 등)을 쓸 수 있도록 Rust와 JS 사이를 연결해 줌.


----

https://yarnpkg.com

Yarn Berry(v2~v4)는 기존의 패키지 관리 방식인 node_modules의 고질적인 문제를 해결하기 위해 등장한 혁신적인 패키지 관리 시스템.

- Plug'n'Play (PnP):

  - node_modules 폴더 대신 패키지 위치 정보가 담긴 .pnp.cjs 파일 하나로 관리합니다.

  - Node.js가 패키지를 찾기 위해 모든 폴더를 뒤지는 시간(I/O 부하)이 획기적으로 줄어듭니다.

- 유령 의존성(Ghost Dependency) 해결:

  - 내가 직접 설치하지 않은 라이브러리를 실수로 참조할 수 있는 보안 구멍을 완벽히 차단합니다.

  - 정확히 package.json에 명시된 패키지만 사용할 수 있어 앱의 안정성이 높아집니다.

- Zero-install:

  - 패키지를 압축 파일(.zip) 형태로 보관하므로 용량이 매우 작습니다.

  - 이 압축 파일들을 Git에 올리면, 팀원들은 yarn install 과정 없이 코드를 받자마자 즉시 실행할 수 있습니다.
  





