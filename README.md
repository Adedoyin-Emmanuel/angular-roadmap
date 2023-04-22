# Learning Angular From Zero To Hero

Hi everyone, here is a repo I made to document my Angular journey, I would be updating this repo from time to time showing what I have learnt... Let's go. I would also be explaning stuffs I don't really understand in this **README** because I learn better when I teach myself.

## What is Angular?

Angular is a frontend framework for building web applications. It is a framework that was built using **Typescript** which allows us to write clean and strict codes.

## What I have learnt so far..

1. Folder navigations
2. Command line operations using ng
3. Templates, Directives, Modules, Dependency injection, Services, Lifecycle hooks, passing data from parent components to child components.
4. Two way binding using ngModel
5. Importing Bootstrap into my project.
6. How to use pipes and creating your own custom pipes.
7. Creating awesome custom pipes. [I created a custom pipe that converts prepositions to lowecase in a sentence. This is the challenge Mosh gave at the end of his pipe in Angular tutorials. Though I wrote some spaghetti codes]
8. Learnt more Angular directives, ngFor, ngIf, ngClass, ngSwitch they are awesome.
9. Leart the ngStyle directive, and the [style] binding syntax.
10. Currently learning about template driven forms

Since it was kind of hard wraping my head about creating custom pipes in Angular, I decided to teach how to do create custom pipes.

## What is a pipe?

A pipe is a building block of **Angular** that is used to format data. We have some pipes which are builtIn pipes in Angular. Like currency, number, uppercase, lowercase, titlecase pipes and so forth. We can also create our own custom pipes.

## How to create a custom pipe?

We could crate a custom pipe using the angular cli with the command _ng generate pipe_ **nameofpipe** or the shorter command _ng g p_ **nameofpipe** but to understand stuffs better, i would use the manual method.

1. Navigate to the component directory where you want to create the pipe.
2. Create a file with the convention _componentname.pipe.ts_

## How to code / setup your pipe

To build your own pipe, you need to import 2 modules from the _@angular/core_ they are **Pipe and PipeTransform**

```ts
import { Pipe, PipeTransfrom } from "@angular/core";
```

Then we declare the pipe name using the **@Pipe** decorator function which takes an object

```ts
import {Pipe, PipeTransfrom} from "@angular/core";


//declare the pipe name

@Pipe({
    name: "nameofpipe"
})

```

After that, we write the logic for the pipe. To do that, we create a class implementing the PipeTransform module then and export it.

```ts
import { Pipe, PipeTransfrom } from "@angular/core";

//declare the pipe name

@Pipe({
  name: "nameofpipe",
})

//create the pipe logic
export class PipeName implements PipeTransfrom {
  //your code goes here
}
```

After that, we need to build upon the **transform method** which is part of the **PipeTransform** interface. Take for example we are building a pipe that summarizes text.
It takes 2 arguments which are the text to summarize and the number of characters to summarize.
The second argument can be optional

```ts
const summarizeFunction = (text: string, textLimit?: number): string => {
  //pass
};
```

```ts
import { Pipe, PipeTransfrom } from "@angular/core";

//declare the pipe name

@Pipe({
  name: "nameofpipe",
})

//create the pipe logic
export class PipeName implements PipeTransfrom {
  transform(value: string, textLimit?: number): string {
    if (!value) return null;
    //check if the textLimit is defined else set default limit to 50
    const actualLimit = textLimit ? textLimit : 50;

    return value.substring(0, actualLimit);
  }
}
```

Lastly, don't forget to import your pipe in the app module under declarations array.

## Projects to build

1. A book purchase store.
2. A real time chat application with firebase.

```

```
