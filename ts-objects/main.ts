
class Point1 {
    x: Number;
    y: Number;

    draw () {
        //..
        console.log('X: ' + this.x + " Y: " + this.y);
    }

    getDistance () {
        //...
    }
}

let point = new Point1(); // Creating an object of point.
point.x = 5;
point.y = 10;
point.draw();

