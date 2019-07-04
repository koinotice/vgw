import { Injectable } from "@nestjs/common"
import { FindConditions, QueryRunner, SelectQueryBuilder } from "typeorm"

import { ValidatorService } from "../../shared/services/validator.service"

import { TokenRepository } from "./token.repository"
import { TokenEntity } from "./token.entity"
// @ts-ignore
import { IPaginationResponse } from "src/typing/base"
import { TokenDto } from "./dto/TokenDto"
import { TokenCreateDto } from "./dto/TokenCreateDto"

@Injectable()
export class TokenService {
    constructor(
        public readonly tokenRepository: TokenRepository,
        public readonly validatorService: ValidatorService,
    ) {
    }


    async findAll(): Promise<IPaginationResponse<TokenEntity[]>> {
        const [resource, total] = await this.tokenRepository
            .createQueryBuilder("token")

            .orderBy("token.id", "ASC")
            // .skip((pageIndex - 1) * pageSize)
            // .take(pageSize)
            .getManyAndCount()

        return {
            total,
            resource,
        }
    }


    async createToken(tokenCreateDto: TokenCreateDto): Promise<TokenEntity> {


        const token = this.tokenRepository.create({ ...tokenCreateDto })
        console.log("article")
        console.log(token)
        return this.tokenRepository.save(token)

    }

    /**
     * Find single token
     */
    findToken(findData: FindConditions<TokenEntity>): Promise<TokenEntity> {
        return this.tokenRepository.findOne(findData)
    }

    /**
     * Find all users
     */
    findTokens(findData: FindConditions<TokenEntity>): Promise<TokenEntity[]> {
        return this.tokenRepository.find(findData)
    }

    createQueryBuilder(alias: string = "token", queryRunner?: QueryRunner): SelectQueryBuilder<TokenEntity> {
        return this.tokenRepository.createQueryBuilder(alias, queryRunner)
    }


}
