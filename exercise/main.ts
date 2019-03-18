
import { LikeComponent } from './like.component'; //Importing the like module...

let component = new LikeComponent(10, true); //Creating an object of like component and passing it 10 like and isSelected to true.
component.onClick(); //call the method onClick.
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`);