import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'input'
})
export class InputPipe implements PipeTransform {

  transform(value: string): any {

    if(!value)
        return null;

    const prep = [
        "of",
        "the"
    ];

    const splitText = value.split(/\s+/);

    for(let i = 0; i < prep.length; i++)
    {
      for (let j = 0; j < splitText.length; j++) {
          if(splitText[j].includes(prep[i]) && j != 0)
          {
          //we capitalize each word
            console.log();
          }
      }

    }


    //console.log(value.split(/\s+/));
    //return value.split(/\s+/);
  }

}
