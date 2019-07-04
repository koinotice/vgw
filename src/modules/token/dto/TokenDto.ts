'use strict';

import { ApiModelPropertyOptional } from '@nestjs/swagger';

 import { AbstractDto } from '../../../common/dto/AbstractDto';
import { StatusType } from '../../../constants/status-type';
import { Column } from "typeorm"
import { UserEntity } from "../../user/user.entity"
import { TokenEntity } from "../token.entity"

export class TokenDto extends AbstractDto {

    @ApiModelPropertyOptional()
    tokenId: string;

    @ApiModelPropertyOptional()
    tokenSymbol: string;

    @ApiModelPropertyOptional()
    type: number;

    @ApiModelPropertyOptional({ enum: StatusType })
    depositState: StatusType;

    @ApiModelPropertyOptional({ enum: StatusType })
    withdrawState: StatusType;

    constructor(token: TokenEntity) {
        super(token);
        this.tokenId = token.tokenId;
        this.tokenSymbol = token.tokenSymbol;
        this.type = token.type;
        this.depositState = token.depositState;
        this.withdrawState = token.withdrawState;

    }


}
