const calcAreaOfCircle = (r) =>  r*r*geolib.pi

const calcAreaOfSquare = (l) => l*l

const calcAreaOfRectangle = (l, w) => l*w

const calcAreaOfTriangle3l = function(l1, l2, l3){
    let p = (l1 + l2 + l3)/2
    return Math.sqrt(p*(p-l1)*(p-l2)*(p-l3))
}

const calcAreaOfTriangleBH = (b, h) => b*h/2

let geolib = {
    pi: 3.14,
    calcAreaOfCircle: calcAreaOfCircle,
    calcAreaOfSquare: calcAreaOfSquare,
    calcAreaOfTriangle3l: calcAreaOfTriangle3l,
    calcAreaOfTriangleBH: calcAreaOfTriangleBH,
    calcAreaOfRectangle: calcAreaOfRectangle
}

module.exports = geolib