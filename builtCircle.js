class Circle {
    radius;
    color;    
    constructor (radius, color) {
        this.radius = radius,
        this.color = color
    }
    
    getArea() {
        return Math.PI*Math.pow(this.radius,2);
    }

    getDiameter() {
        return this.radius*2*Math.PI;
    }
}
