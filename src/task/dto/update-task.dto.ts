import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsNumber } from 'class-validator';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsNumber({}, { message: 'Status must be a number!' })
  public status?: number;
}
