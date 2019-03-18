//Module 
export class Point5 {
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

     get X(){
         return this.x;
     }

     set X(value) {
         if (value < 0) {
            throw new Error('Value cannot be less than 0');
         }
         else{
            this.x = value;
         }
     }

     get  Y() {
        return this.y;
     }

     set Y(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0');
         }
         else{
            this.y = value;
         }

     }

     draw () {
         //..
         console.log('X: ' + this.x + " Y: " + this.y);
     }
 
     getDistance () {
         //...
     }
 }