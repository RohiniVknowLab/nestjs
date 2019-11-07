import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();


// import { ClientProxyFactory, Transport, ClientOptions } from '@nestjs/microservices';

// const microserviceOption : ClientOptions = {
//   transport: Transport.RMQ,
//   options: {
//     urls: [`amqp://localhost:5672`],
//     queue: 'source_queue',
//     queueOptions: { durable: true },
//   }
// }

// const client = ClientProxyFactory.create(microserviceOption);

