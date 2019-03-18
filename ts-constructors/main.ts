
class Point2 {
    x: Number;
    y: Number;

    constructor (x? : Number, y?: Number) {
        this.x = x;
        this.y = y;
    }

    draw () {
        //..
        console.log('X: ' + this.x + " Y: " + this.y);
    }

    getDistance () {
        //...
    }
}

let point3 = new Point2(5,6); // Creating an object of point.
let point4 = new Point2();
point.draw();

