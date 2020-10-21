import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    JoinColumn
} from 'typeorm';
import bcrypt from 'bcrypt';
import Token from './Token';

const BCRYPT_SALT = bcrypt.genSaltSync(8);

@Entity('users')
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({type: "text"})
    public name: string;

    @Column({type: "text", unique: true})
    public email: string;

    @Column({type: "text"})
    public password: string;

    @CreateDateColumn({name: 'created_at'})
    public createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    public updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    public deletedAt: Date;

    async hashPassword(password:string) : Promise<string> {
        return bcrypt.hashSync(password, BCRYPT_SALT);
    }

    async comparePassword(password: string, hashString: string): Promise<boolean> {
        return bcrypt.compareSync(password, hashString);
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword(): Promise<void> {
        if (this.password) {
            this.password = await this.hashPassword(this.password);
        }
    }

    @OneToMany(() => Token, token => token.user_id)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    token:Token;
}