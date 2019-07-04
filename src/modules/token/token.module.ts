import { Module, forwardRef } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { TokenService } from "./token.service"
import { AuthModule } from "../auth/auth.module"
import { TokenController } from "./token.controller"
import { TokenRepository } from "./token.repository"

@Module({
    imports: [
        forwardRef(() => AuthModule),
        TypeOrmModule.forFeature([TokenRepository]),
    ],
    controllers: [TokenController],
    exports: [TokenService],
    providers: [
        TokenService,
    ],
})
export class TokenModule {
}
