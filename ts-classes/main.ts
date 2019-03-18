
/**Interface can only have variables and method signatures and then class
 *  can implement the interface to hide the implementation. 
 * Using Interface to define the shape of a point object!
*/
interface Point {
    x: Number,
    y: Number

    draw : () => void; // method signature
    
}

let drawPoint2 = (point : Point) => { // Inline Annotations
    //...

}

//Class with method implementation and properties.
class Point {
    x: Number;
    y: Number;

    //To draw the point
    draw () {
        //...
    }

    //getter for distance
    getDistance () {
        //...
    }
}