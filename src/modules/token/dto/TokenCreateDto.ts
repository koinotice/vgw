"use strict"

import {
    IsString,
    IsEmail,
    MinLength,
    IsNotEmpty,
    IsPhoneNumber,
    IsOptional,
    IsNumberString,
    IsNumber,
} from "class-validator"
import { ApiModelProperty } from "@nestjs/swagger"
import { Column } from "typeorm"
import { TokenEntity } from "../token.entity"
import { StatusType } from "../../../constants/status-type"

export class TokenCreateDto {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly tokenId: string

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly tokenSymbol: string

    @IsNumber()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly type: number


    @IsNotEmpty()
    depositState: StatusType;

    @IsNotEmpty()
    withdrawState: StatusType;



}
