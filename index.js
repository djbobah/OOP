function getRandomNumber(max = 101, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}

//task1

class Rectangle {
  constructor(w, h) {
    this.width = w;
    this.height = h;
  }
  getArea() {
    return this.width * this.height;
  }
  getPerimeter() {
    return this.width * 2 + this.height * 2;
  }
  toString() {
    return `Прямоугольник с шириной ${this.width} и высотой ${
      this.height
    } имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`;
  }
}

console.log("Задание 1:");
console.log(new Rectangle(100, 30).toString());
console.log(
  new Rectangle(getRandomNumber(300, 1), getRandomNumber(300, 1)).toString()
);

//task2
class Square extends Rectangle {
  constructor(s) {
    super();
    this.side = s;
    this.height = s;
    this.width = s;
  }

  toString() {
    return `Квадрат со стороной ${
      this.side
    } имеет периметр ${this.getPerimeter()} и площадь ${this.getArea()}`;
  }
}

console.log("Задание 2:");
console.log(new Square(100, 30).toString());
console.log(
  new Square(getRandomNumber(300, 1), getRandomNumber(300, 1)).toString()
);
