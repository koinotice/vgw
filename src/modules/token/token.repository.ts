import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
 import { TokenEntity } from "./token.entity"

@EntityRepository(TokenEntity)
export class TokenRepository extends Repository<TokenEntity> {}
