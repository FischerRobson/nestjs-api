## Setup

After create the project with `npm init -i` run:

```sh
npm i @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
```

Setup TS config with

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Then run:

```sh
npx ts-node-dev src/main.ts
```


Simple nestjs server:

```ts
import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  
  @Get()
  getRootRoute() {
    return 'root';
  }
}

@Module({
  controllers: [AppController],
})
class AppModule { }

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000);
}

bootstrap();

```


![clipboard.png](inkdrop://file:1DkjglcTz)

![clipboard.png](inkdrop://file:LolH_uu15)