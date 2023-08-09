/* exported Shape */

class Shape {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }
}
const shapeInstance = new Shape('9', '12');
console.log(shapeInstance);
