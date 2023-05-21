import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTask'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: string, args: string = ""): string{
    return value.charAt(0).toLocaleUpperCase() + value.substring(1).toLocaleLowerCase() + args
  }

}
