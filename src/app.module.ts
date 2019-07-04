import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigService } from './shared/services/config.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { contextMiddleware } from './middlewares';
import { MathModule } from './modules/math/math.module';
import { SharedModule } from './shared.module';
import { TokenModule } from './modules/token/token.module';
 import './boilerplate.polyfill';



@Module({
    imports: [
        AuthModule,
        UserModule,
        MathModule,
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) => configService.typeOrmConfig,
            inject: [ConfigService],
        }),
        TokenModule,
    ],

})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(contextMiddleware).forRoutes('*');
    }
}
