function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
  
 let areaFigura = numberOfSides * (1/2 * circleRadius * circleRadius * Math.sin(2 * Math.PI/numberOfSides))

   return Number(areaFigura.toFixed(3));

}
