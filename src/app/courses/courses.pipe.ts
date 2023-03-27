import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})

export class CoursesPipe implements PipeTransform
{
    transform(value: string, limit: number): string
    {
        let actualLimit = limit ? limit : 50;
        
        return value.substring(0, actualLimit);
    }
}