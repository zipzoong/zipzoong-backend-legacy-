# Zipzoong Backend

<div align=center>

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

[![Test Status](https://github.com/zipzoong/zipzoong-backend/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/zipzoong/zipzoong-backend/actions/workflows/ci.yml)

</div>

## 설명

집중 백엔드 프로젝트

## API 문서

- [View in the `Swagger Editor`](https://editor.swagger.io/?url=https://raw.githubusercontent.com/zipzoong/zipzoong-backend/main/packages/api/swagger.json)

## 깃 컨벤션

1. 기본적으로 [유다시티 커밋 컨벤션](https://udacity.github.io/git-styleguide/)을 따른다.

2. 제목은 대문자로 시작하며 명령형으로 작성

3. commit description은 컨벤션을 따르지 않고 자유롭게 작성

4. footer에 추가할 tracker id는 제목 끝에 추가한다.

5. 해당 컨벤션을 PR, issue, branch 명에도 적용한다.

6. issue, PR 제목에는 feat, doc등을 대신하여 [Gitmoji](https://gitmoji.dev/)를 사용한다.

- [유다시티 스타일 설명 블로그](https://haesoo9410.tistory.com/300)

- [깃모지 설명 블로그](https://treasurebear.tistory.com/70)

## 컨벤션 표기 예시

| Udacity  | Gitmoji               | description                 |
| -------- | --------------------- | --------------------------- |
| feat     | :sparkles:            | 기능 추가                   |
| fix      | :bug:                 | 버그 수정                   |
| hotfix   | :ambulance:           | 긴급 수정                   |
| (hot)fix | :lock:                | 보안 이슈 해결              |
| docs     | :memo:                | 문서 업데이트               |
| style    | :art:                 | 코드 구조, 포매팅 관련 수정 |
| style    | :truck:               | 리소스 이동, 이름 변경      |
| refactor | :recycle:             | 프로덕션 코드 리팩토링      |
| test     | :white_check_mark:    | 테스트 추가/수정            |
| chore    | :arrow_up:            | dependencies 업데이트       |
| chore    | :construction_worker: | CI 빌드 시스템 추가/수정    |
| ?        | :wrench:              | 설정 파일 추가/수정         |
| ?        | :heavy_plus_sign:     | dependency 추가             |
| ?        | :heavy_minus_sign:    | dependency 제거             |
| ?        | :card_file_box:       | DB 관련 수정 사항 적용      |

- ?는 애매한데 일단 chore로 생각중
