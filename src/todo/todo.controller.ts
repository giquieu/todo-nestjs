import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common';

import { TodoService } from './todo.service';
import { Todo } from './todo.entity';


@Controller('todo')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @Get()
    index(): Promise<Todo[]> {
      return this.todoService.findAll();
    }

    @Post()
    async create(@Body() todoData: Todo): Promise<any> {
      return this.todoService.create(todoData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() todoData: Todo): Promise<any> {
        todoData.id = Number(id);
        return this.todoService.update(todoData);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
        return this.todoService.delete(id);
    }

}
