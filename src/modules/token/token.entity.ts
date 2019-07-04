import { Column, Entity, ManyToOne } from "typeorm"
import { TokenDto } from "./dto/TokenDto"
import { AbstractEntity } from "../../common/abstract.entity"
import { StatusType } from "../../constants/status-type"
import { UserDto } from "../user/dto/UserDto"

@Entity({ name: "tokens" })
export class TokenEntity extends AbstractEntity<TokenDto> {

    @Column({
        unique: true,
        nullable: false,
    })
    public tokenId: string

    @Column()
    public tokenSymbol: string

    @Column()
    public type: number

    @Column({ type: "enum", enum: StatusType, default: StatusType.OPEN })
    public depositState: StatusType

    @Column({ type: "enum", enum: StatusType, default: StatusType.OPEN })
    public withdrawState: StatusType

    dtoClass = TokenDto

}
