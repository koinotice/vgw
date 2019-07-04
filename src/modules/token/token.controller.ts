import {
    Controller,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    Get,
    UseInterceptors,
    UseGuards,
    UploadedFile, Req,
} from "@nestjs/common"
import { ApiOkResponse, ApiOperation, ApiUseTags, ApiBearerAuth, ApiImplicitFile } from "@nestjs/swagger"


import { TokenService } from "./token.service"
import { TokenEntity } from "./token.entity"
import { TokenRepository } from "./token.repository"
import { TokenCreateDto } from "./dto/TokenCreateDto"
import { TokenDto } from "./dto/TokenDto"

@Controller("token")
@ApiUseTags("token")
export class TokenController {

    constructor(
        public readonly tokenService: TokenService,
        public readonly tokenRepository: TokenRepository,
    ) {
    }


    @Get()
    @ApiOperation({ title: "获取文章列表" })
    async findAll(): Promise<TokenEntity[]> {
        return await this.tokenService.findAll()
    }

    // @Get()
    // @ApiOperation({ title: '获取文章列表' })
    // async findOne(): Promise<TokenEntity[]> {
    //     return await this.tokenService.findToken();
    // }
    //
    @Post()
    @ApiOperation({ title: 'token add ' })
    async createToken(@Body() tokenCreateDto: TokenCreateDto, @Req() req) {
        //return await this.tokenService.createToken(tokenCreateDto)

        const createdToken = await this.tokenService.createToken(tokenCreateDto);

        return createdToken.toDto();
    }
    //
    //
    // @Post()
    // @HttpCode(HttpStatus.OK)
    // @ApiOkResponse({ type: LoginPayloadDto, description: 'User info with access token' })
    // async userLogin(@Body() userLoginDto: UserLoginDto): Promise<LoginPayloadDto> {
    //     const userEntity = await this.authService.validateUser(userLoginDto);
    //
    //     const [user, token] = await Promise.all([userEntity.toDto(), this.authService.createToken(userEntity)]);
    //     return new LoginPayloadDto(user, token);
    // }
    //
    // @Post('register')
    // @HttpCode(HttpStatus.OK)
    // @ApiOkResponse({ type: UserDto, description: 'Successfully Registered' })
    // @ApiImplicitFile({ name: 'avatar', required: true })
    // @UseInterceptors(FileInterceptor('avatar'))
    // async userRegister(
    //     @Body() userRegisterDto: UserRegisterDto,
    //     @UploadedFile() file: IFile,
    // ): Promise<UserDto> {
    //     const createdUser = await this.userService.createUser(userRegisterDto, file);
    //
    //     return createdUser.toDto();
    // }
    //
    // @Get('me')
    // @HttpCode(HttpStatus.OK)
    // @UseGuards(AuthGuard)
    // @UseInterceptors(AuthUserInterceptor)
    // @ApiBearerAuth()
    // @ApiOkResponse({ type: UserDto, description: 'current user info' })
    // getCurrentUser(@AuthUser() user: UserEntity) {
    //     return user.toDto();
    // }
}
