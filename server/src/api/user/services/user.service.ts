import {Injectable} from '@nestjs/common';
import {Task} from '@shared/entities/task/task.entity';
import {InfluxDBService} from '../../global/influxdb/influxdb.service';

@Injectable()
export class TaskService {
    constructor(private readonly influxClient: InfluxDBService) {
    }

    getAllTasks(): Task[] {
        this.influxClient.getSeries({measurement: 'nis_issues', database: 'nis_wrkr'});
        return [{defaultColor: 'somehitng', defaultFont: 'sm,ehtun', name: 'lkasjlkaj'}];
    }
}
