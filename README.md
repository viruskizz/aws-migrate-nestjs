# AWS Migrate NestJS

This demo code is from `AWS Thailand community session`

[Migrating from container to serverless to reduce cost]

## Concept

Moving single entry point application from container to serverless application on AWS. for this demo use [NestJS] as backend api. Use [Serverless Framework] for CI/CD package to deploy serverless application

## Project Structure

### 1. Container

The original application is run on Container.

### 2. Serverless

The migrated application is run on Serverless

## Prerequisite

The main package:

- [NodeJS]
- [AWS CLI]
- [AWS Account]
- [AWS Config] for local deployment

## Migration Step

0. move to `serverless` directory

```sh
cd serverless
```

1. install [Serverless Framework]

```sh
# install as global
npm install -g serverless

# verify installation
serverless --version
```

2. install addition package

```sh
npm install --save @vendia/serverless-express aws-lambda
```

3. add Lambda entry function file

```ts
# src/lambda.ts
import { NestFactory } from '@nestjs/core';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { AppModule } from './app.module';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await NestFactory.create(AppModule);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
```

4. add `serverless.yml` and config

```yml
service: serverless-example

plugins:
  - serverless-plugin-typescript
  - serverless-offline

provider:
  name: aws
  runtime: nodejs16.x
  memorySize: 512
  region: ap-southeast-1
  profile: default
  deploymentMethod: direct
  deploymentBucket: aws-migration-sls-deployment

functions:
  profile:
    handler: src/lambda.handler
    events:
      - http:
          method: ANY
          path: /profiles/
      - http:
          method: ANY
          path: '/profiles/{any+}'
  product:
    handler: src/lambda.handler
    events:
      - http:
          method: ANY
          path: /products/
      - http:
          method: ANY
          path: '/products/{any+}'
```

5. install addition plugin for `serverless`

```sh
npm install --save-dev serverless-offline serverless-plugin-typescript
```

You also read [NestJS document]

<!-- Referrence Section -->
[Migrating from container to serverless to reduce cost]: https://1drv.ms/p/s!AjQn55CO5TAvwgAxzdiO_LCiuRcz?e=2lgF0r
[NestJS]: https://nestjs.com/
[Serverless Framework]: https://www.serverless.com/
[NestJS document]: https://docs.nestjs.com/faq/serverless
[NodeJS]: https://nodejs.org/en
[AWS CLI]: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
[AWS Account]: https://portal.aws.amazon.com/billing/signup
[AWS Config]: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html
