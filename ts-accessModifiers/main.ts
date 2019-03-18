
class Point3 {
   /** 
    * private x: Number;
    * private y: Number;
    * 
    * constructor (x? : Number, y?: Number) {
    *  this.x = x;
    * this.y = y;
    * }
    * 
    **/

    constructor (private x? : Number, private y?: Number) { // More efficent and less code - no need to declare vars.

    }
    draw () {
        //..
        console.log('X: ' + this.x + " Y: " + this.y);
    }

    getDistance () {
        //...
    }
}

let point5 = new Point3(5,6); // Creating an object of point.
let point6 = new Point3();
point6
point.draw();

