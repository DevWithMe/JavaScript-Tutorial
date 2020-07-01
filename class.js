class Polygon {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    };

    area() {
        // width * height
        return this.width * this.height;
    };

    isSameArea(shape) {
        return shape === this.area()
    }
}

// console.log(new Polygon("rectangle", 5, 6).isSameArea(40))

class Square extends Polygon {
    constructor(side) {
        super("square", side, side);
    }

    
}

square = new Square(5);
console.log(square.area())