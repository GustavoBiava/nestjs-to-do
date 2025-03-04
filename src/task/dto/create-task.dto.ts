import { IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Title must be a string!' })
  @Length(3, 25, { message: 'Title invalid lenght! (Min: 3, Max: 25)' })
  public title: string;

  @IsString({ message: 'Description must be a string!' })
  @Length(3, 50, { message: 'Description invalid lenght! (Min: 3, Max: 50)' })
  public description: string;
}
