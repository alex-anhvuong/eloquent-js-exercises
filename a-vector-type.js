class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(v) {
        return new Vec(this.x + v.x, this.y + v.y);
    }

    minus(v) {
        return new Vec(this.x - v.x, this.y - v.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
}

let vec = new Vec(3, 4);

console.log(vec.plus(new Vec(1, 1)));
console.log(vec.minus(new Vec(0, 3)));
console.log(vec.length);