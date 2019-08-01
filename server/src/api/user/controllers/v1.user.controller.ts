import { Controller, Get } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import {Task} from '../../../../../shared/entities/task/task.entity';
import {TaskService} from '../services/task.service';

@Controller('v1/task')
export class V1TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    getTasks(): Observable<Task[]> {
        return of(this.taskService.getAllTasks());
    }
}
