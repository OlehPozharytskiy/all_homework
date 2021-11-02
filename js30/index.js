// task 1
class Ring {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return this.r;
  }
  set radius(r) {
    this.r = r;
  }
  get d() {
    return this.r * 2;
  }
  area() {
    return Math.PI * this.r * this.r;
  }
  circumference() {
    return Math.PI * this.r * 2;
  }
}

let ring = new Ring(5);
console.log(ring.radius);
console.log(ring.d);
console.log(ring.area().toFixed(2));
console.log(ring.circumference().toFixed(2));

// task 2
// class Marker {
//   constructor(c, p) {
//     this.c = c;
//     this.p = p;
//   }
//   get markerProps() {
//     return [this.c, this.p];
//   }

//   set markerProps(newProps) {
//     [this.c, this.p] = [...newProps];
//   }

//   print(line) {
//     let t = document.getElementById("content");
//     for (let i = 0; i < line.length; i++) {
//       if (this.p != 0) {
//         if (line[i] == " ") {
//           this.p += 0.5;
//         }
//         t.innerHTML += line[i];
//         t.style.color = this.c;
//         this.p -= 0.5;
//       } else {
//         document.write("Marker is over");
//         break;
//       }
//     }
//   }
// }

// class FilledMarker extends Marker {
//   fill(p) {
//     if (p > 100) {
//       p = 100;
//     } else {
//       this.p += p;
//     }
//   }
// }

// let marker = new FilledMarker("#838", 2);

// marker.fill(31);

// const l = `List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department`;

// marker.print(l);
// document.body.setAttribute("style", "font-size: 18px; text-align: center;");
