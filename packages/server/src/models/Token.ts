
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BaseEntity,
    ManyToOne,
    JoinColumn,
    BeforeRemove
} from 'typeorm';
import User from './User';

@Entity('tokens')
export default class Token extends BaseEntity{
    @PrimaryGeneratedColumn()
    public id:number

    @Column()
    public user_id: number

    @Column()
    public token: string

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({name:'user_id', referencedColumnName: 'id'})
    user:User

    public static async store(userId: number, token: string) {
        const insertToken = Token.create({
            token,
            user_id: userId
        })

        return await insertToken.save()
    }
}