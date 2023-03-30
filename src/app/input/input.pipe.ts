import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'input',
})

export class InputPipe implements PipeTransform {
  transform(value: string): any {
    if (!value) return null;

    const prep = ['of', 'the'];
    //split the string by empty spaces
    const splitText = value.split(' ');

    for (let i = 0; i < splitText.length; i++) {
      if (prep.includes(splitText[i].toLowerCase()) && i !== 0) {
        splitText[i] = splitText[i].toLowerCase();
      } else {
        //capitalize the words
        splitText[i] =
          splitText[i].substring(0, 1).toUpperCase() +
          splitText[i].substring(1).toLowerCase();
      }
    }

    //console.log(value.split(/\s+/));
    //return value.split(/\s+/);

    return splitText.join(' ');
  }
}
