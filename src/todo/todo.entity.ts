import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    description: string;

    @Column()
    completed: boolean;

}