import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private repository: Repository<Todo>,
    ) { }

    async findAll(): Promise<Todo[]> {
        return await this.repository.find();
    }

    async create(todo: Todo): Promise<Todo> {
        return await this.repository.save(todo);
    }

    async update(todo: Todo): Promise<UpdateResult> {
        return await this.repository.update(todo.id, todo);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }

}
