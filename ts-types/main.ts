
let count = 5;
count = 'a'; 

let a : any; // Can be of type any.
a = 5;
a = true;
a = 'c';

let b : number; // type annotation: declare what type of variable it will be before hand.
b = 5;

//All types
let c : number;
let d : boolean;
let e : string; 
let f : number [];
let g : number [] = [1,2,3,4];
let h : any[] = [1, true, 'c'];

//enums - javascript
const colorRed = 0;
const colorBlue = 1;
const colorGreen = 2;

//enums - typescript
enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Blue;



