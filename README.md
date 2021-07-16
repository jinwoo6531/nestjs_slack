1일차

1. tsconfig.json 파일에 "esModuleInterop": true, 항목 추가(import \* as 를 안해도 되게 해주는 명령어)

2. 핫 리로딩 (공식문서 참고하여 설정)

3. dotenv

- npm i --save @nestjs/config
- app.module (imports에 추가)
- .env 파일 생성

4.  Typrorm 관계설정

- @JoinColumn은 둘중에 1개의 엔티티에 붙인다.
- @OneToMany(() => Channels 여기서 사용할 컬럼명, (channels) => channels.Workspace 연결된 반대편에서 사용할 컬럼)

5. DTO는 extends를 통해 entity와 연동시킬 수 있다.
