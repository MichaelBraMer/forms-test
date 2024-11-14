import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  });

  const options = new DocumentBuilder() 
    .setTitle('MongoDB Forms REST API')
    .setDescription('API REST for foms creator')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options); 

  SwaggerModule.setup('docs', app, document); 

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
