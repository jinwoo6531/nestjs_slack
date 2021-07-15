1일차

1. tsconfig.json 파일에 "esModuleInterop": true, 항목 추가(import \* as 를 안해도 되게 해주는 명령어)

2. 핫 리로딩 (공식문서 참고하여 설정)

3. dotenv
 - npm i --save @nestjs/config
 - app.module (imports에 추가)
 - .env 파일 생성